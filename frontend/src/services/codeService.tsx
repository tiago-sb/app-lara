import type { CompileRequest } from "../types/experiment/CompileRequest";

const BASE_URL = "/lara-api";

export const compileCode = async (request: CompileRequest) => {
  const res = await fetch(`${BASE_URL}/compile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request)
  });
  
  return res.json();
}

export const sendCode = async (jobId: string, esp32Ip: string) => {
  const encodedIp = esp32Ip.replaceAll(".", ",");
  
  const res = await fetch(`${BASE_URL}/send/${jobId}/${encodedIp}`, {
    method: "POST"
  });
   
  return res.json();
}

export const downloadBin = async (jobId: string) => {
  const res = await fetch(`${BASE_URL}/download/${jobId}`);
  
  return res.blob();
}