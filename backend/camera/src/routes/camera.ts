import { Router } from "express";
import type { Request, Response } from "express";
import { cameraConfig } from "../config/camera.js";
import axios from "axios";

const router = Router();

/**
 * @openapi
 * /camera/live:
 *   get:
 *     summary: Stream da câmera
 *     tags:
 *       - Camera
 *     responses:
 *       200:
 *         description: Stream MJPEG
 */
router.get("/live", async (_req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get(
      `http://${cameraConfig.ip}/axis-cgi/mjpg/video.cgi`,
      {
        responseType: "stream",
        auth: {
          username: cameraConfig.username,
          password: cameraConfig.password,
        },
      }
    );

    const contentType = response.headers["content-type"];

    res.setHeader(
      "Content-Type",
      typeof contentType === "string"
        ? contentType
        : "multipart/x-mixed-replace"
    );

    response.data.pipe(res);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status ?? 500).json({
        message: "Erro ao conectar à câmera.",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "Erro interno." });
    }
  }
});

export default router;