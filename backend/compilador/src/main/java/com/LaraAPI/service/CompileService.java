package com.LaraAPI.service;

import org.springframework.stereotype.Service;

import com.LaraAPI.model.CompileRequest;

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.nio.charset.StandardCharsets;
import java.util.UUID;
import java.util.regex.Pattern;

@Service
public class CompileService {

    private final String BUILD_BASE = System.getProperty("java.io.tmpdir") + File.separator + "arduino-builds";

    private final String PROJECT_BASE = Paths.get("").toAbsolutePath().toString();
    private final String LIBS_PATH = Paths.get(PROJECT_BASE, "lib").toString();
    private String otaTemplate = null;

    public CompileResult compileUserCode(CompileRequest request) throws IOException, InterruptedException {
        System.out.println(LIBS_PATH);

        validateUserCode(request.getSetup());
        validateUserCode(request.getLoop());

        if (request.getGlobal() != null) {
            validateUserCode(request.getGlobal());
        }

        String jobId = UUID.randomUUID().toString();
        Path jobDir = Paths.get(BUILD_BASE, jobId);
        Files.createDirectories(jobDir);

        String fullCode = combineCode(request);

        Path secretsPath = Paths.get(PROJECT_BASE, "secrets.h"); // Para não ter que declarar direto o wifi e a senha

        if (!Files.exists(secretsPath)) {
            return new CompileResult(false, "Erro: Arquivo 'secrets.h' não encontrado na raiz do projeto.", null, jobId,
                    "Arquivo de credenciais (secrets.h) ausente.");
        }

        Files.copy(secretsPath, jobDir.resolve("secrets.h"), StandardCopyOption.REPLACE_EXISTING);

        Path inoFile = jobDir.resolve(jobId + ".ino");

        Files.writeString(inoFile, fullCode, StandardCharsets.UTF_8, StandardOpenOption.CREATE,
                StandardOpenOption.TRUNCATE_EXISTING);

        ProcessBuilder pb = new ProcessBuilder(
                "arduino-cli", "compile",
                "--libraries", LIBS_PATH,
                "--fqbn", "esp32:esp32:esp32",
                "--output-dir", jobDir.resolve("build").toString(),
                jobDir.toString());

        pb.redirectErrorStream(true);

        Process process = pb.start();

        StringBuilder logsBuilder = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(process.getInputStream(), StandardCharsets.UTF_8))) {
            String line;
            while ((line = reader.readLine()) != null) {
                logsBuilder.append(line).append(System.lineSeparator());
            }
        }
        String logs = logsBuilder.toString();
        int exitCode = process.waitFor();

        Path binFile = jobDir.resolve("build").resolve(jobId + ".ino.bin");

        if (exitCode == 0 && Files.exists(binFile)) {
            return new CompileResult(true, logs, binFile.toFile(), jobId, null);
        } else {
            String errorMessage = extractErrorMessage(logs);
            cleanUp(jobId);
            return new CompileResult(false, logs, null, jobId, errorMessage);
        }
    }

    private String loadOtaTemplate() throws IOException {
        if (otaTemplate == null) {

            Path templatePath = Paths.get(PROJECT_BASE, "ota_template.ino");
            if (!Files.exists(templatePath)) {

                throw new FileNotFoundException(
                        "Falha ao carregar o template OTA. Arquivo 'ota_template.ino' não encontrado em: "
                                + templatePath);
            }
            otaTemplate = Files.readString(templatePath, StandardCharsets.UTF_8);
        }
        return otaTemplate;
    }

    private String combineCode(CompileRequest request) throws IOException {
        String template = loadOtaTemplate();

        String globalCode = request.getGlobal() != null ? request.getGlobal() : "";
        String setupCode = request.getSetup() != null ? request.getSetup() : "";
        String loopCode = request.getLoop() != null ? request.getLoop() : "";

        globalCode = normalizeNewlines(request.getGlobal());
        setupCode = normalizeNewlines(request.getSetup());
        loopCode = normalizeNewlines(request.getLoop());

        String combinedCode = template.replace(
                "// {{USER_GLOBAL_CODE}}",
                globalCode);

        combinedCode = combinedCode.replace(
                "// {{USER_SETUP_CODE}}",
                setupCode);

        combinedCode = combinedCode.replace(
                "// {{USER_LOOP_CODE}}",
                loopCode);

        return combinedCode;
    }

    public File getBinFile(String jobId) {
        Path binPath = Paths.get(BUILD_BASE, jobId, "build", jobId + ".ino.bin");
        return binPath.toFile();
    }

    public void cleanUp(String jobId) throws IOException {
        Path jobDir = Paths.get(BUILD_BASE, jobId);
        if (Files.exists(jobDir)) {
            Files.walkFileTree(jobDir, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                    Files.delete(file);
                    return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
                    Files.delete(dir);
                    return FileVisitResult.CONTINUE;
                }
            });
        }
    }

    private String extractErrorMessage(String logs) {
        if (logs == null || logs.isEmpty()) {
            return "Erro de compilação desconhecido.";
        }

        String ansiRegex = "\u001b\\[[0-9;]*m";
        Pattern ansiPattern = Pattern.compile(ansiRegex);

        String[] lines = logs.split(System.lineSeparator());
        StringBuilder fullErrorBuilder = new StringBuilder();
        boolean startCapturing = false;

        for (String line : lines) {

            if (line.contains("In function") || line.contains("fatal error")) {
                startCapturing = true;
            }

            if (startCapturing) {
                String cleanedLine = ansiPattern.matcher(line).replaceAll("");

                if (cleanedLine.contains("Used platform")) {
                    break;
                }

                fullErrorBuilder.append(cleanedLine).append(System.lineSeparator());
            }
        }

        if (fullErrorBuilder.length() > 0) {
            return fullErrorBuilder.toString().trim();
        }

        for (String line : lines) {
            if (line.contains(" error: ")) {
                return ansiPattern.matcher(line).replaceAll("").trim();
            }
        }

        return "Falha na compilação. Consulte os logs completos para obter detalhes.";
    }

    // Dentro da classe CompileService

    private void validateUserCode(String userCode) {

        String[] dangerousKeywords = {
                "system(", "exec(", "popen(", "fork(", "System.exit(", "Runtime.getRuntime().exec("
        };

        for (String keyword : dangerousKeywords) {
            if (userCode.contains(keyword)) {
                throw new IllegalArgumentException(
                        "O código contém palavras-chave perigosas e não pode ser compilado.");
            }
        }
    }

    private String normalizeNewlines(String code) {
        if (code == null)
            return "";
        return code.replace("\r\n", "\n").trim();
    }

    public static class CompileResult {
        private final boolean success;
        private final String logs;
        private final File binFile;
        private final String jobId;
        private final String errorMessage;

        public CompileResult(boolean success, String logs, File binFile, String jobId, String errorMessage) {
            this.success = success;
            this.logs = logs;
            this.binFile = binFile;
            this.jobId = jobId;
            this.errorMessage = errorMessage;
        }

        public boolean isSuccess() {
            return success;
        }

        public String getLogs() {
            return logs;
        }

        public File getBinFile() {
            return binFile;
        }

        public String getJobId() {
            return jobId;
        }

        public String getErrorMessage() {
            return errorMessage;
        }
    }
}
