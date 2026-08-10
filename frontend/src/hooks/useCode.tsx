import { useState } from "react";
import { getPadText } from "../services/etherpadService";
import { compileCode, sendCode } from "../services/codeService";
import type { CompileRequest } from "../types/experiment/CompileRequest";
import { convertInoToCompileRequest } from "../utils/convertInoToCompileRequest";
import { parseCompileResult } from "../utils/parseCompileResponse";

export const useCode = () => {
  const [output, setOutput] = useState("Output...");
  const [jobId, setJobId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function compile(request: CompileRequest) {
    setLoading(true);
    setOutput("Compilando...");
    try {
      const result = await compileCode(request);
      const parsed = parseCompileResult(result);
      setOutput(parsed.success ? parsed.message : `${parsed.message}\n\n${parsed.details ?? ""}`);
      if (result.success) setJobId(result.jobId);
    } catch {
      setOutput("Erro ao conectar com a API.");
    } finally {
      setLoading(false);
    }
  }

  async function compileFromPad(padId: string) {
    setLoading(true);
    setOutput("Buscando código...");
    try {
      const text = await getPadText(padId);
      const request = convertInoToCompileRequest(text);

      setOutput("Compilando...");
      const result = await compileCode(request);
      const parsed = parseCompileResult(result);
      setOutput(parsed.success ? parsed.message : `${parsed.message}\n\n${parsed.details ?? ""}`);

      if (result.success) setJobId(result.jobId);
    } catch (error) {
      setOutput(error instanceof Error ? error.message : "Erro ao preparar código.");
    } finally {
      setLoading(false);
    }
  }

  async function compileAndSend(padId: string, esp32Ip: string) {
    setLoading(true);
    setOutput("Buscando código...");
    try {
      const text = await getPadText(padId);
      const request = convertInoToCompileRequest(text);

      setOutput("Compilando...");
      const result = await compileCode(request);
      const parsed = parseCompileResult(result);

      if (!result.success) {
        setOutput(parsed.message);
        return;
      }

      setJobId(result.jobId);
      setOutput("Enviando para ESP32...");

      const sendResult = await sendCode(result.jobId, esp32Ip);
      setOutput(sendResult.message ?? "Concluído.");
    } catch (error) {
      setOutput(error instanceof Error ? error.message : "Erro ao compilar e enviar.");
    } finally {
      setLoading(false);
    }
  }

  async function send(esp32Ip: string) {
    if (!jobId) {
      setOutput("Nenhum jobId disponível. Compile primeiro.");
      return;
    }

    setLoading(true);
    setOutput("Enviando para ESP32...");
    try {
      const result = await sendCode(jobId, esp32Ip);
      setOutput(result.message ?? "Concluído.");
    } catch {
      setOutput("Erro ao enviar.");
    } finally {
      setLoading(false);
    }
  }

  return { output, jobId, loading, compile, compileFromPad, compileAndSend, send };
};