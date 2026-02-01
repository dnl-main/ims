// src/utils/logger.ts
import winston from 'winston';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go up one level to reach the backend/src root, then into /logs
const logDir = path.join(__dirname, '../logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }), // Captures the full stack trace
        winston.format.splat(),
        winston.format.json()
    ),
    defaultMeta: { service: 'backend-api' },
    transports: [
        // The Laravel-style continuous log
        new winston.transports.File({ 
            filename: path.join(logDir, 'express.log'),
            format: winston.format.combine(
                winston.format.printf(({ timestamp, level, message, stack }) => {
                    return `[${timestamp}] ${level.toUpperCase()}: ${stack || message}`;
                })
            )
        }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        ),
    }));
}

export default logger;