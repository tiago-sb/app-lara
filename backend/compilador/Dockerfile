FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre

WORKDIR /app

ENV ARDUINO_DATA_DIR=/arduino-cli
ENV ARDUINO_DOWNLOADS_DIR=/arduino-cli/staging
ENV ARDUINO_SKETCHBOOK_DIR=/arduino-cli/sketchbook

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       curl \
       ca-certificates \
       python3 \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | sh \
    && mv bin/arduino-cli /usr/local/bin/arduino-cli \
    && arduino-cli config init \
    && arduino-cli config set board_manager.additional_urls \
       https://espressif.github.io/arduino-esp32/package_esp32_index.json \
    && arduino-cli core update-index \
    && arduino-cli core install esp32:esp32

RUN ESPOTA=$(find /arduino-cli/packages/esp32 -name "espota.py" | head -1) \
    && echo "espota.py encontrado em: $ESPOTA" \
    && test -n "$ESPOTA" \
    && ln -s "$ESPOTA" /usr/local/bin/espota.py

COPY --from=build /app/target/*.jar app.jar

COPY lib ./lib
COPY ota_template.ino ./ota_template.ino
COPY secrets.h ./secrets.h

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]