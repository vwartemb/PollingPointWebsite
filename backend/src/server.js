import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import express from 'express';
import cors from 'cors';
import civicRoutes from './routes/civic.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { generalLimiter } from './middleware/rateLimiter.js';
import logger from './utils/logger.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Trust proxy - important for rate limiting behind reverse proxies
app.set('trust proxy', 1);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply general rate limiter to all routes
app.use(generalLimiter);

// Request logging middleware
app.use((req, _res, next) => {
    logger.http(`${req.method} ${req.path} - IP: ${req.ip}`);
    next();
});

// Routes
app.use('/api/civic', civicRoutes);

// Test route
app.get('/api/test', (_req, res) => {
    res.json({
        success: true,
        message: 'Node backend is working!',
        timestamp: new Date().toISOString()
    });
});

// Health check route
app.get('/api/health', (_req, res) => {
    res.json({
        success: true,
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// 404 handler - must be after all routes
app.use(notFoundHandler);

// Error handling middleware - must be last
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
    logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
});