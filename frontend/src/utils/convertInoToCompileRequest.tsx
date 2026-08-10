import type { CompileRequest } from "../types/experiment/CompileRequest";

const extractFunctionBody = (code: string, functionName: "setup" | "loop") => {
  const regex = new RegExp(`void\\s+${functionName}\\s*\\(\\s*\\)\\s*\\{`);
  const match = regex.exec(code);

  if (!match) {
    return {
      body: "",
      start: -1,
      end: -1
    };
  }

  let braceCount = 1;
  let i = match.index + match[0].length;
  const bodyStart = i;

  while (i < code.length && braceCount > 0) {
    if (code[i] === "{") braceCount++;
    if (code[i] === "}") braceCount--;
    i++;
  }

  return {
    body: code.slice(bodyStart, i - 1).trim(),
    start: match.index,
    end: i
  };
}

export const convertInoToCompileRequest = (code: string): CompileRequest => {
  const setup = extractFunctionBody(code, "setup");
  const loop = extractFunctionBody(code, "loop");

  if (setup.start === -1 && loop.start === -1) throw new Error("O código precisa conter void setup() e void loop().");

  if (setup.start === -1) throw new Error("O código precisa conter void setup().");

  if (loop.start === -1) throw new Error("O código precisa conter void loop().");

  let global = code;

  const ranges = [setup, loop].sort((a, b) => b.start - a.start);

  for (const range of ranges) {
    global = global.slice(0, range.start) + global.slice(range.end);
  }

  return {
    global: global.trim(),
    setup: setup.body,
    loop: loop.body
  };
}
