import logger from '../utils/logger.js';

/**
 * Custom API Error class for consistent error handling
 */
export class APIError extends Error {
    constructor(message, statusCode = 500, details = null) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Centralized error handling middleware
 * Catches all errors and formats them consistently
 */
export const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    let details = err.details || null;

    // Log error details
    logger.error({
        message: err.message,
        statusCode,
        path: req.path,
        method: req.method,
        ip: req.ip,
        stack: err.stack,
        details
    });

    // Don't leak error details in production
    if (process.env.NODE_ENV === 'production' && statusCode === 500) {
        message = 'Internal Server Error';
        details = null;
    }

    // Send error response
    res.status(statusCode).json({
        success: false,
        error: {
            message,
            ...(details && { details }),
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};

/**
 * Catch-all for 404 errors
 */
export const notFoundHandler = (req, res, next) => {
    const error = new APIError(`Route ${req.originalUrl} not found`, 404);
    next(error);
};

/**
 * Async route wrapper to catch errors in async route handlers
 * Usage: router.get('/route', asyncHandler(async (req, res) => {...}))
 */
export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
