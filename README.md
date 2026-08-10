# LARA — Laboratório de Robótica Colaborativa

Plataforma web para operação remota e colaborativa de um laboratório de robótica, desenvolvida como parte de projeto de Iniciação Científica (FAPESB) na UESB.

O sistema permite que usuários acessem sessões remotas para programar, compilar e enviar código a dispositivos Arduino, acompanhando o experimento em tempo real via streaming de câmera e editor colaborativo.

## Sumário

- [Arquitetura](#arquitetura)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Pré-requisitos](#pré-requisitos)
- [Como clonar](#como-clonar)
- [Configuração de variáveis de ambiente](#configuração-de-variáveis-de-ambiente)
- [Rodando com Docker Compose](#rodando-com-docker-compose)
- [Rodando cada serviço manualmente (modo dev)](#rodando-cada-serviço-manualmente-modo-dev)
- [Portas utilizadas](#portas-utilizadas)
- [Licença](#licença)

## Arquitetura

O projeto é dividido em 4 serviços independentes, cada um em seu próprio diretório:

| Serviço | Diretório | Stack | Função |
|---|---|---|---|
| **Frontend** | `frontend/` | React + TypeScript + Vite | Interface web da plataforma |
| **Backend principal** | `sistema/` | Python + Django (Django REST Framework) | Autenticação, reservas, experimentos, usuários |
| **Compilador** | `compilador/` | Java + Spring Boot (Maven) | Compilação e envio (OTA) de código para Arduino |
| **Câmera** | `backend/camera/` | Node.js + TypeScript | Streaming de vídeo (WebRTC) da bancada de experimento |

<!-- TODO: se quiser, adicione aqui um diagrama simples (ex: imagem em assets/) mostrando como os 4 serviços se comunicam entre si -->

## Estrutura do repositório

```
app-lara/
├── frontend/                  # Interface web (React + Vite)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── sistema/                   # Backend principal (Django)
│   ├── authentication/
│   ├── coreLaraServer/        # configurações do projeto Django
│   ├── experiment/
│   ├── reservation/
│   ├── user/
│   ├── assets/
│   ├── manage.py
│   └── requirements.txt
│
├── compilador/                 # Serviço de compilação/OTA (Spring Boot)
│   ├── src/main/java/com/LaraAPI/
│   │   ├── controller/
│   │   ├── model/
│   │   └── service/
│   │       ├── CompileService.java
│   │       └── SendService.java
│   ├── ota_template.ino
│   ├── secrets.h
│   └── pom.xml
│
├── backend/
│   └── camera/                 # Streaming de câmera (Node.js + TS)
│       ├── src/
│       ├── package.json
│       └── tsconfig.json
│
└── docker-compose.yml          # Orquestração de todos os serviços
```

## Pré-requisitos

Antes de começar, tenha instalado:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (recomendado — sobe tudo de uma vez)

Caso prefira rodar os serviços manualmente (sem Docker), também será necessário:

- [Node.js](https://nodejs.org/) (versão 18+) e npm
- [Python](https://www.python.org/) (3+) e pip
- [Java JDK](https://adoptium.net/) (versão 21)
- [Maven](https://maven.apache.org/) (versão 3+)

## Como clonar

```bash
git clone https://github.com/tiago-sb/app-lara.git
cd app-lara
```

## Configuração de variáveis de ambiente

Cada serviço possui seu próprio arquivo de configuração. **Nenhum desses arquivos vai para o repositório** (estão no `.gitignore`), então é necessário criá-los manualmente após o clone.

### `sistema/` (Django)

Todo o processo de configuração já está na pasta do projeto, no arquivo `README.md`. 

### `compilador/` (Spring Boot)

Compile e suba o sketch abaixo no ESP32 (preenchendo `ssid` e `password` com as credenciais do seu Wi-Fi). Ele conecta o dispositivo à rede, ativa o OTA e imprime o IP atribuído no Monitor Serial:
 
```cpp
#include <WiFi.h>
#include <ArduinoOTA.h>
 
const char *ssid = "";
const char *password = "";
 
// INJEÇÃO GLOBAL DO USUÁRIO AQUI:
// {{USER_GLOBAL_CODE}}
 
void userTask(void *parameter)
{
    // Código de loop do usuário
    while (true)
    {
        // INJEÇÃO LOOP DO USUÁRIO AQUI:
        // {{USER_LOOP_CODE}}
 
        vTaskDelay(10 / portTICK_PERIOD_MS);
    }
}
 
void setup()
{
    Serial.begin(115200);
 
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);
 
    while (WiFi.waitForConnectResult() != WL_CONNECTED)
    {
        Serial.println("Falha na conexão WiFi! Reiniciando...");
        delay(5000);
        ESP.restart();
    }
 
    ArduinoOTA.setHostname("minha-esp32");
    ArduinoOTA.setPassword("1234");
    ArduinoOTA.setPort(3232);
    ArduinoOTA.begin();
 
    Serial.println("Pronto para receber atualizações OTA!");
    Serial.print("IP: ");
    Serial.println(WiFi.localIP());
 
    // INJEÇÃO SETUP DO USUÁRIO AQUI:
    // {{USER_SETUP_CODE}}
 
    xTaskCreatePinnedToCore(
        userTask,
        "UserTask",
        8192,
        NULL,
        1,
        NULL,
        1);
}
 
void loop()
{
    ArduinoOTA.handle();
    delay(10);
}
```
 
Abra o Monitor Serial (115200 baud) e anote o IP impresso — ele será usado no passo 4.
 
#### 3. Crie o `secrets.h`
 
Na raiz de `compilador/`, crie o arquivo `secrets.h` com suas credenciais de Wi-Fi (usado pelo `ota_template.ino`):
 
```cpp
// crie esse arquivo com esse nome `secrets.h` e altere para as suas credenciais de wi-fi
#ifndef SECRETS_H
#define SECRETS_H
 
#define WIFI_SSID ""
#define WIFI_PASS ""
 
#endif
```
 
#### 4. Configure o `application-local.properties`
 
Copie o arquivo de exemplo:
 
```bash
cd compilador/src/main/resources
cp application.properties application-local.properties
```
 
E preencha com o caminho do `espota.py` (passo 1) e o IP do ESP32 (passo 2):
 
```properties
server.port=8081
ota.espota-path=CAMINHO_DO_ARQUIVO_ESPOTA.PY
ota.host-ip=IP_ESP32
ota.python=python
```
 
#### 5. Rode o serviço com o perfil `local`
 
```bash
cd compilador
mvn spring-boot:run -Dspring-boot.run.profiles=local
```

### `backend/camera/` (Node.js)

Crie um arquivo `.env` na raiz de `backend/camera/`:

```env
CAMERA_IP=IP_SUA_CAMERA
CAMERA_USERNAME=NOME_SUA_CAMERA
CAMERA_PASSWORD=SENHA_SUA_CAMERA
```

## Rodando com Docker Compose

> O arquivo `docker-compose.yml` será adicionado à raiz do projeto separadamente. Depois de colocá-lo lá e configurar as variáveis de ambiente acima, basta rodar:

```bash
docker compose up --build
```

Isso deve subir os 4 serviços (frontend, sistema, compilador e câmera) de forma orquestrada.

## Portas utilizadas

| Serviço | Porta padrão |
|---|---|
| Etherpad | `9001` |
| Frontend | `5173` (padrão Vite) |
| Sistema (Django) | `8000` |
| Compilador (Spring Boot) | `8081` (Uso Local, fora da Docker) |
| Câmera | `3001` |