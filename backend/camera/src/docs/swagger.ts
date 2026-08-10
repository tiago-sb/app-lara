import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "API Camera",
      version: "1.0.0",
      description: "API para acesso à câmera Axis",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.ts")],
};

export const swaggerSpec = swaggerJsdoc(options);