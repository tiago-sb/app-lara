#include <WiFi.h>
#include <ArduinoOTA.h>

const char *ssid = "SIAC";
const char *password = "1q2w3e4r";

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
