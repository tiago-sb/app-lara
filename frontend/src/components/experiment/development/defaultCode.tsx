export const defaultCode = `// Exemplo de código para o robô LARA
// Linguagem: C++

#include <Arduino.h>

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.println("Robô LARA iniciado!");
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
  
  Serial.println("LED piscando...");
}
`;