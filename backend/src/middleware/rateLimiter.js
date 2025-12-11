import rateLimit from 'express-rate-limit';
import logger from '../utils/logger.js';

/**
 * Rate limiting middleware configurations
 * Prevents abuse and protects external API quotas
 */

// General API rate limiter - applies to all routes
export const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        success: false,
        error: {
            message: 'Too many requests from this IP, please try again later.',
            retryAfter: '15 minutes'
        }
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (req, res) => {
        logger.warn(`Rate limit exceeded for IP: ${req.ip} on route: ${req.path}`);
        res.status(429).json({
            success: false,
            error: {
                message: 'Too many requests, please try again later.',
                retryAfter: '15 minutes'
            }
        });
    }
});

// Strict rate limiter for expensive API calls (Congress, Google Civic, etc.)
export const apiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 50, // Limit each IP to 50 requests per hour
    message: {
        success: false,
        error: {
            message: 'API rate limit exceeded. Please try again later.',
            retryAfter: '1 hour'
        }
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: false, // Count all requests
    handler: (req, res) => {
        logger.warn(`API rate limit exceeded for IP: ${req.ip} on route: ${req.path}`);
        res.status(429).json({
            success: false,
            error: {
                message: 'You have exceeded the API rate limit. Please try again in an hour.',
                retryAfter: '1 hour'
            }
        });
    }
});

// Very strict limiter for authentication/sensitive routes (when you add those)
export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Only 5 requests per 15 minutes
    message: {
        success: false,
        error: {
            message: 'Too many authentication attempts, please try again later.',
            retryAfter: '15 minutes'
        }
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true, // Don't count successful requests
    handler: (req, res) => {
        logger.warn(`Auth rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({
            success: false,
            error: {
                message: 'Too many failed attempts. Please try again later.',
                retryAfter: '15 minutes'
            }
        });
    }
});

// Lenient limiter for read-only public data
export const publicDataLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // 200 requests per 15 minutes
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        logger.warn(`Public data rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({
            success: false,
            error: {
                message: 'Rate limit exceeded for public data endpoint.',
                retryAfter: '15 minutes'
            }
        });
    }
});

export default {
    generalLimiter,
    apiLimiter,
    authLimiter,
    publicDataLimiter
};
