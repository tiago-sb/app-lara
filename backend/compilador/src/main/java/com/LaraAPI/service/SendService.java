package com.LaraAPI.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.concurrent.TimeUnit;

@Service
public class SendService {
    // Caminho para o espota.py
    @Value("${ota.espota-path}")
    private String espotaPath;

    @Value("${ota.host-ip}")
    private String hostIp;

    @Value("${ota.python:python3}")
    private String python;

    public boolean flashFirmware(File binFile, String esp32Ip) throws IOException, InterruptedException {
        ProcessBuilder pb = new ProcessBuilder(
            python, espotaPath,
            "-i", esp32Ip,
            "-I", hostIp,
            "-p", "3232",
            "-a", "1234",
            "-t", "60",
            "-f", binFile.getAbsolutePath());

        pb.redirectErrorStream(true);
        Process process = pb.start();

        // Capturar logs do processo
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("[ESPOTA] " + line);
            }
        }

        boolean finished = process.waitFor(120, TimeUnit.SECONDS);

        if (!finished) {
            process.destroyForcibly();
            throw new IOException("Timeout: OTA demorou mais de 120s");
        }

        int exitCode = process.exitValue();
        return exitCode == 0;
    }
}
