import type { CompileSummary } from "../types/experiment/CompileResponse";

function cleanLogs(logs: string): string {
  return logs
    // normaliza quebras de linha do Windows (\r\n) para Unix (\n)
    .replace(/\r\n/g, "\n")
    
    // remove códigos de cor ANSI (ex: \u001b[92m que colore o terminal)
    .replace(/\u001b\[[0-9;]*m/g, "")
    
    // remove caminho Linux do container (ex: /tmp/arduino-builds/uuid/)
    .replace(/\/tmp\/arduino-builds\/[a-f0-9-]+\//g, "")
    
    // remove caminho Windows (ex: C:\Users\belat\AppData\Local\Temp\arduino-builds\uuid\)
    .replace(/[A-Z]:\\[^:]+\\arduino-builds\\[a-f0-9-]+\\/gi, "")
    
    // renomeia o arquivo de uuid.ino para main.ino
    .replace(/[a-f0-9-]+\.ino/g, "main.ino")
    
    // remove o número da linha no bloco de contexto, mantém só o pipe
    .replace(/^\s+\d*\s*\|/gm, "  |")
    
    // remove a tabela de bibliotecas usadas
    .replace(/\nUsed (library|platform)[\s\S]*$/m, "")
    
    // remove a linha final "Error during build: exit status 1"
    .replace(/\nError during build:.*$/m, "")
    
    .trim();
}

export function parseCompileResult(result: any): CompileSummary {
  if (!result.success) {
    return {
      success: false,
      message: "❌ Compilação falhou",
      details: cleanLogs(result.logs ?? result.errorMessage ?? ""),
    };
  }

  const logs = result.logs ?? "";
  const flashMatch = logs.match(/Sketch uses (\d+) bytes \((\d+)%\)/);
  const ramMatch   = logs.match(/Global variables use (\d+) bytes \((\d+)%\)/);

  const flash = flashMatch ? `${flashMatch[1]} bytes (${flashMatch[2]}%)` : "N/A";
  const ram   = ramMatch   ? `${ramMatch[1]} bytes (${ramMatch[2]}%)`   : "N/A";

  return {
    success: true,
    message: `✅ Compilação bem-sucedida!\n📦 Flash: ${flash}\n🧠 RAM: ${ram}\nPronto para enviar ao ESP32 🚀`,
  };
}