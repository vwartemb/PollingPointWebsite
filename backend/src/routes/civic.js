import express from "express";
import { fetchCongressData } from '../utils/congressAPI.js';
import { fetchOpenStatesData } from '../utils/openstatesAPI.js';
import { forwardGeocode, reverseGeocode } from '../utils/geocodeAPI.js';
import { getVoterInfo, getElections } from '../utils/googlecivicAPI.js';
import { asyncHandler, APIError } from '../middleware/errorHandler.js';
import { validatePagination, validateJurisdiction } from '../middleware/validators.js';
import { apiLimiter } from '../middleware/rateLimiter.js';
import cache from '../utils/cache.js';
import logger from '../utils/logger.js';

const router = express.Router();

// Apply API rate limiter to all routes in this router
router.use(apiLimiter);

// GET route to fetch recent bills from Congress.gov
router.get('/congress/bills', validatePagination, asyncHandler(async (req, res) => {
    const { limit = 5, offset = 0 } = req.query;
    const params = { limit, offset };

    // Check cache first
    const cacheKey = cache.generateKey('congress-bills', params);
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        logger.info('Serving bills from cache');
        return res.json({
            success: true,
            data: cachedData,
            cached: true
        });
    }

    // Fetch from API
    logger.info('Fetching bills from Congress API');
    const data = await fetchCongressData('/bill', params);

    if (!data) {
        throw new APIError('No data returned from Congress API', 500);
    }

    // Cache the response for 1 hour
    cache.set(cacheKey, data, 3600);

    res.json({
        success: true,
        data,
        cached: false
    });
}));

// GET route to fetch members of Congress
router.get('/congress/members', validatePagination, asyncHandler(async (req, res) => {
    const { limit = 5, offset = 0 } = req.query;
    const params = { limit, offset };

    // Check cache first
    const cacheKey = cache.generateKey('congress-members', params);
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        logger.info('Serving members from cache');
        return res.json({
            success: true,
            data: cachedData,
            cached: true
        });
    }

    // Fetch from API
    logger.info('Fetching members from Congress API');
    const data = await fetchCongressData('/member', params);

    if (!data) {
        throw new APIError('No data returned from Congress API', 500);
    }

    // Cache the response for 1 hour
    cache.set(cacheKey, data, 3600);

    res.json({
        success: true,
        data,
        cached: false
    });
}));

// GET route to fetch state jurisdictions
router.get('/states/jurisdictions', validatePagination, asyncHandler(async (req, res) => {
    const { per_page = 5, page = 1 } = req.query;
    const params = { per_page, page };

    // Check cache first
    const cacheKey = cache.generateKey('states-jurisdictions', params);
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        logger.info('Serving jurisdictions from cache');
        return res.json({
            success: true,
            data: cachedData,
            cached: true
        });
    }

    // Fetch from API
    logger.info('Fetching jurisdictions from Open States API');
    const data = await fetchOpenStatesData('/jurisdictions', params);

    if (!data) {
        throw new APIError('No data returned from Open States API', 500);
    }

    // Cache the response for 24 hours (jurisdictions don't change often)
    cache.set(cacheKey, data, 86400);

    res.json({
        success: true,
        data,
        cached: false
    });
}));

// GET route to fetch state bills (now accepts jurisdiction as query param)
router.get('/states/bills', validateJurisdiction, validatePagination, asyncHandler(async (req, res) => {
    const { jurisdiction, per_page = 5, page = 1 } = req.query;
    const params = { jurisdiction, per_page, page };

    // Check cache first
    const cacheKey = cache.generateKey('states-bills', params);
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        logger.info(`Serving bills for ${jurisdiction} from cache`);
        return res.json({
            success: true,
            data: cachedData,
            cached: true
        });
    }

    // Fetch from API
    logger.info(`Fetching bills for ${jurisdiction} from Open States API`);
    const data = await fetchOpenStatesData('/bills', params);

    if (!data) {
        throw new APIError('No data returned from Open States API', 500);
    }

    // Cache the response for 1 hour
    cache.set(cacheKey, data, 3600);

    res.json({
        success: true,
        data,
        cached: false
    });
}));

// GET route to test forward geocoding
router.get('/geocode/forward', asyncHandler(async (req, res) => {
    const { address } = req.query;

    if (!address) {
        throw new APIError('Address parameter is required', 400);
    }

    logger.info(`Forward geocoding address: ${address}`);
    const data = await forwardGeocode(address);

    if (!data || !data.features || data.features.length === 0) {
        throw new APIError('No results found for address', 404);
    }

    res.json({
        success: true,
        data
    });
}));

// GET route to test reverse geocoding
router.get('/geocode/reverse', asyncHandler(async (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        throw new APIError('Latitude and longitude parameters are required', 400);
    }

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lng)) {
        throw new APIError('Invalid latitude or longitude values', 400);
    }

    logger.info(`Reverse geocoding coordinates: ${lat}, ${lng}`);
    const data = await reverseGeocode(lng, lat);

    if (!data || !data.features || data.features.length === 0) {
        throw new APIError('No address found for coordinates', 404);
    }

    res.json({
        success: true,
        data
    });
}));

// GET route for voter information
router.get('/voter-info', asyncHandler(async (req, res) => {
    const { address, electionId } = req.query;

    if (!address) {
        throw new APIError('Address parameter is required', 400);
    }

    // Check cache first
    const cacheKey = cache.generateKey('voter-info', { address, electionId });
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        logger.info('Serving voter info from cache');
        return res.json({
            success: true,
            data: cachedData,
            cached: true
        });
    }

    logger.info(`Fetching voter info for address: ${address}`);
    const data = await getVoterInfo(address, electionId);

    // Cache for 24 hours (election data doesn't change often)
    cache.set(cacheKey, data, 86400);

    res.json({
        success: true,
        data,
        cached: false
    });
}));

// GET route for elections list
router.get('/elections', asyncHandler(async (req, res) => {
    // Check cache first
    const cacheKey = cache.generateKey('elections', {});
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
        logger.info('Serving elections from cache');
        return res.json({
            success: true,
            data: cachedData,
            cached: true
        });
    }

    logger.info('Fetching elections list');
    const data = await getElections();

    // Cache for 24 hours
    cache.set(cacheKey, data, 86400);

    res.json({
        success: true,
        data,
        cached: false
    });
}));

export default router;