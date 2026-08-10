package com.LaraAPI.controller;

import com.LaraAPI.model.CompileRequest;
import com.LaraAPI.service.CompileService;
import com.LaraAPI.service.SendService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;

@RestController
@Tag(name = "LaraAPI", description = "Endpoints para compilação e envio do código.")
public class LaraController {

    @Autowired
    private CompileService compileService;
    @Autowired
    private SendService sendService;

    @PostMapping("/compile")
    public ResponseEntity<Map<String, Object>> compileCode(@RequestBody CompileRequest request) {
        try {
            CompileService.CompileResult result = compileService.compileUserCode(request);

            Map<String, Object> response = new HashMap<>();
            response.put("success", result.isSuccess());
            response.put("logs", result.getLogs());
            response.put("jobId", result.getJobId());

            if (!result.isSuccess()) {
                response.put("errorMessage", result.getErrorMessage());
                return ResponseEntity.badRequest().body(response);
            }

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "Falha: " + e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }

    @GetMapping("/download/{jobId}")
    public ResponseEntity<?> downloadBinFile(@PathVariable String jobId) {
        try {
            File binFile = compileService.getBinFile(jobId);
            if (binFile == null || !binFile.exists()) {
                return ResponseEntity.notFound().build();
            }

            ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(binFile.toPath()));

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + jobId + ".ino.bin")
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .contentLength(binFile.length())
                    .body(resource);

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Falha: " + e.getMessage());
        }
    }

    @PostMapping("/send/{jobId}/{esp32Ip}")
    public ResponseEntity<Map<String, Object>> sendBinFile(@PathVariable String jobId, @PathVariable String esp32Ip) {
        String decodedIp = esp32Ip.replaceAll(",", ".");

        // Adicione temporariamente no início do sendBinFile no controller
        System.out.println("[SEND] jobId recebido: " + jobId);
        System.out.println("[SEND] bin existe: " + compileService.getBinFile(jobId).exists());
        System.out.println("[SEND] bin path: " + compileService.getBinFile(jobId).getAbsolutePath());
        try {
            File binFile = compileService.getBinFile(jobId);

            if (binFile == null || !binFile.exists()) {
                Map<String, Object> notFoundResponse = new HashMap<>();
                notFoundResponse.put("sucess", false);
                notFoundResponse.put("message", "Arquivo binário não encontrado.");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(notFoundResponse);
            }

            boolean send = sendService.flashFirmware(binFile, decodedIp);

            Map<String, Object> apiResponse = new HashMap<>();

            apiResponse.put("sucess", send);
            if (send) {
                apiResponse.put("message", "Binário enviado para a ESP32 com sucesso");
                compileService.cleanUp(jobId);
                return ResponseEntity.ok(apiResponse);

            }

            else {
                apiResponse.put("message", "Falha ao enviar binário para a ESP32.");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiResponse);
            }
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "Falha inesperada: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}
