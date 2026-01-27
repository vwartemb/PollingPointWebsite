import { body, param, query, validationResult } from 'express-validator';
import { APIError } from './errorHandler.js';

/**
 * Middleware to check validation results
 * Call this after validation chains to handle errors
 */
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(err => ({
            field: err.path,
            message: err.msg,
            value: err.value
        }));

        throw new APIError('Validation failed', 400, formattedErrors);
    }
    next();
};

/**
 * Common validation schemas for user input
 */

// US State validation (2-letter code or full name)
export const validateState = [
    query('state')
        .optional()
        .trim()
        .notEmpty()
        .withMessage('State cannot be empty')
        .isLength({ min: 2, max: 50 })
        .withMessage('Invalid state format')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('State can only contain letters and spaces'),
    validate
];

// ZIP code validation
export const validateZipCode = [
    query('zipCode')
        .optional()
        .trim()
        .matches(/^\d{5}(-\d{4})?$/)
        .withMessage('ZIP code must be in format 12345 or 12345-6789'),
    validate
];

// Address validation (for Google Civic API)
export const validateAddress = [
    query('address')
        .trim()
        .notEmpty()
        .withMessage('Address is required')
        .isLength({ min: 5, max: 200 })
        .withMessage('Address must be between 5 and 200 characters')
        .matches(/^[a-zA-Z0-9\s,.-]+$/)
        .withMessage('Address contains invalid characters'),
    validate
];

// Pagination validation
export const validatePagination = [
    query('limit')
        .optional()
        .isInt({ min: 1, max: 100 })
        .withMessage('Limit must be between 1 and 100')
        .toInt(),
    query('offset')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Offset must be 0 or greater')
        .toInt(),
    validate
];

// Jurisdiction validation (for Open States)
// Accepts query parameter or can be used with body
export const validateJurisdiction = [
    query('jurisdiction')
        .optional()
        .trim()
        .notEmpty()
        .withMessage('Jurisdiction cannot be empty')
        .isLength({ min: 2, max: 50 })
        .withMessage('Jurisdiction must be between 2 and 50 characters')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Jurisdiction can only contain letters and spaces')
        .customSanitizer(value => {
            // Capitalize first letter of each word for consistency
            return value.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }),
    body('jurisdiction')
        .optional()
        .trim()
        .notEmpty()
        .withMessage('Jurisdiction cannot be empty')
        .isLength({ min: 2, max: 50 })
        .withMessage('Jurisdiction must be between 2 and 50 characters')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Jurisdiction can only contain letters and spaces')
        .customSanitizer(value => {
            // Capitalize first letter of each word for consistency
            return value.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }),
    // Custom validation to ensure at least one is provided
    (req, _res, next) => {
        const queryJurisdiction = req.query?.jurisdiction;
        const bodyJurisdiction = req.body?.jurisdiction;

        if (!queryJurisdiction && !bodyJurisdiction) {
            throw new APIError('Jurisdiction is required (provide as query param or in body)', 400);
        }
        next();
    },
    validate
];

// Bill ID validation
export const validateBillId = [
    param('billId')
        .trim()
        .notEmpty()
        .withMessage('Bill ID is required')
        .matches(/^[a-zA-Z0-9-]+$/)
        .withMessage('Bill ID can only contain letters, numbers, and hyphens'),
    validate
];

// Member ID validation
export const validateMemberId = [
    param('memberId')
        .trim()
        .notEmpty()
        .withMessage('Member ID is required')
        .matches(/^[a-zA-Z0-9]+$/)
        .withMessage('Member ID can only contain letters and numbers'),
    validate
];

// Election query validation
export const validateElectionQuery = [
    query('address')
        .trim()
        .notEmpty()
        .withMessage('Address is required for election information')
        .isLength({ min: 5, max: 200 })
        .withMessage('Address must be between 5 and 200 characters'),
    query('electionId')
        .optional()
        .isInt()
        .withMessage('Election ID must be a number')
        .toInt(),
    validate
];

// Generic sanitization for text input
export const sanitizeText = [
    body('*').trim().escape(),
    query('*').trim().escape()
];

/**
 * Custom validators for specific use cases
 */

// Validate US state abbreviation
const US_STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
    'DC', 'PR', 'VI', 'GU', 'AS', 'MP'
];

export const validateStateAbbreviation = [
    query('state')
        .trim()
        .toUpperCase()
        .isIn(US_STATES)
        .withMessage('Invalid US state or territory abbreviation'),
    validate
];

// Validate latitude and longitude
export const validateCoordinates = [
    query('latitude')
        .optional()
        .isFloat({ min: -90, max: 90 })
        .withMessage('Latitude must be between -90 and 90'),
    query('longitude')
        .optional()
        .isFloat({ min: -180, max: 180 })
        .withMessage('Longitude must be between -180 and 180'),
    validate
];
