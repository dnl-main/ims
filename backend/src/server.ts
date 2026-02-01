import express from "express";
import type { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./utils/logger.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  // Log when response finishes
  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info({
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
    });
  });
  
  next();
});

app.get("/api/health", (req: Request, res: Response) => {
  logger.info("Health check endpoint called");
  res.json({
    status: "ok",
    message: "Backend running with TypeScript",
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.url,
  });
  
  res.status(500).json({
    status: "error",
    message: process.env.NODE_ENV === "production" 
      ? "Internal server error" 
      : err.message,
  });
});

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
  console.log(`Server running on http://localhost:${PORT}`);
});