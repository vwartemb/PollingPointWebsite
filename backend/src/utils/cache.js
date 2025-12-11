import NodeCache from 'node-cache';
import logger from './logger.js';

/**
 * Cache utility for API responses
 *
 * Default TTL: 1 hour (3600 seconds)
 * Check period: 10 minutes (600 seconds)
 */
class CacheManager {
    constructor() {
        this.cache = new NodeCache({
            stdTTL: 3600, // 1 hour default
            checkperiod: 600, // Check for expired keys every 10 minutes
            useClones: false // Don't clone objects (better performance)
        });

        // Log cache statistics
        this.cache.on('set', (key) => {
            logger.debug(`Cache SET: ${key}`);
        });

        this.cache.on('expired', (key) => {
            logger.debug(`Cache EXPIRED: ${key}`);
        });
    }

    /**
     * Get value from cache
     * @param {string} key - Cache key
     * @returns {any|null} - Cached value or null if not found
     */
    get(key) {
        try {
            const value = this.cache.get(key);
            if (value !== undefined) {
                logger.debug(`Cache HIT: ${key}`);
                return value;
            }
            logger.debug(`Cache MISS: ${key}`);
            return null;
        } catch (error) {
            logger.error(`Cache GET error for key ${key}: ${error.message}`);
            return null;
        }
    }

    /**
     * Set value in cache
     * @param {string} key - Cache key
     * @param {any} value - Value to cache
     * @param {number} ttl - Time to live in seconds (optional)
     * @returns {boolean} - Success status
     */
    set(key, value, ttl = null) {
        try {
            const success = ttl
                ? this.cache.set(key, value, ttl)
                : this.cache.set(key, value);

            if (success) {
                logger.debug(`Cache SET: ${key} (TTL: ${ttl || 'default'})`);
            }
            return success;
        } catch (error) {
            logger.error(`Cache SET error for key ${key}: ${error.message}`);
            return false;
        }
    }

    /**
     * Delete value from cache
     * @param {string} key - Cache key
     * @returns {number} - Number of deleted entries
     */
    del(key) {
        try {
            const deleted = this.cache.del(key);
            logger.debug(`Cache DEL: ${key}`);
            return deleted;
        } catch (error) {
            logger.error(`Cache DEL error for key ${key}: ${error.message}`);
            return 0;
        }
    }

    /**
     * Clear entire cache
     */
    flush() {
        try {
            this.cache.flushAll();
            logger.info('Cache flushed');
        } catch (error) {
            logger.error(`Cache FLUSH error: ${error.message}`);
        }
    }

    /**
     * Get cache statistics
     * @returns {object} - Cache stats
     */
    getStats() {
        return this.cache.getStats();
    }

    /**
     * Generate cache key from request parameters
     * @param {string} prefix - Key prefix (e.g., 'congress', 'civic')
     * @param {object} params - Request parameters
     * @returns {string} - Generated cache key
     */
    generateKey(prefix, params = {}) {
        const sortedParams = Object.keys(params)
            .sort()
            .map(key => `${key}=${params[key]}`)
            .join('&');

        return `${prefix}:${sortedParams || 'default'}`;
    }
}

// Export singleton instance
const cacheManager = new CacheManager();
export default cacheManager;
