import express from "express";
import "dotenv/config";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "./docs/swagger.ts";
import cameraRoutes from "./routes/camera.ts";

const app = express();

app.use(cors());

app.use("/camera", cameraRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (_req, res) => { res.send("API funcionando!"); });

app.listen(3001, () => { console.log("http://localhost:3001"); });