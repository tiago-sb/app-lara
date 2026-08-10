import { useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";

// Gera uma sequência aleatória usando os caracteres informados
const generateRandomString = (length: number, characters: string): string => {
  return Array.from({ length }, () => {
    // Escolhe uma posição aleatória da string de caracteres
    const index = Math.floor(Math.random() * characters.length);

    // Retorna o caractere dessa posição
    return characters[index];
  }).join(""); // Junta todos os caracteres em uma única string
};

const generatePadId = (): string => {
  // três strings aleatórias
  const prefix = generateRandomString(3, LETTERS);
  // três números aleatórias
  const middle = generateRandomString(3, NUMBERS);
  // três strings aleatórias
  const suffix = generateRandomString(3, LETTERS);

  return `LARA-${prefix}-${middle}${suffix}`;
};

// Hook responsável por gerar um Pad ID único
export const usePadId = () => {
  // Gera o Pad ID apenas na primeira renderização
  const [padId] = useState(generatePadId);

  // Disponibiliza o Pad ID para uso no componente
  return { padId };
};