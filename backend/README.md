# PollingPoint Backend API

Production-ready Node.js/Express backend with built-in validation, caching, rate limiting, and error handling.

## Infrastructure Features

### ✅ Input Validation
- Automatic validation of all user inputs
- Sanitization to prevent injection attacks
- Clear error messages for invalid data
- Pre-built validators for common civic data (addresses, zip codes, states, etc.)

### ✅ Caching
- 1-hour cache for frequently accessed data
- Reduces API calls to external services
- Faster response times for users
- Automatic cache expiration

### ✅ Rate Limiting
- **General API**: 100 requests per 15 minutes
- **External API routes**: 50 requests per hour
- **Auth routes**: 5 requests per 15 minutes (for future use)
- Protects against abuse and API quota limits

### ✅ Error Handling
- Centralized error handling
- Consistent error response format
- Detailed logging for debugging
- Production-safe error messages

### ✅ Logging
- Request/response logging
- Error tracking
- Log files stored in `/logs` directory
- Different log levels (info, warn, error, debug)

## API Endpoints

### Congress Data

#### Get Bills
```
GET /api/civic/congress/bills?limit=20&offset=0
```

**Query Parameters:**
- `limit` (optional): Number of results (1-100, default: 20)
- `offset` (optional): Pagination offset (default: 0)

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "cached": false
}
```

#### Get Members
```
GET /api/civic/congress/members?limit=20&offset=0
```

**Query Parameters:**
- `limit` (optional): Number of results (1-100, default: 20)
- `offset` (optional): Pagination offset (default: 0)

### State Data (Open States)

#### Get Jurisdictions
```
GET /api/civic/states/jurisdictions?per_page=20&page=1
```

**Query Parameters:**
- `per_page` (optional): Results per page (1-100, default: 20)
- `page` (optional): Page number (default: 1)

#### Get State Bills
```
GET /api/civic/states/bills?jurisdiction=Illinois&per_page=20&page=1
```

**Query Parameters:**
- `jurisdiction` (required): State name (e.g., "Illinois", "California")
- `per_page` (optional): Results per page (1-100, default: 20)
- `page` (optional): Page number (default: 1)

**Note:** Jurisdiction parameter is now required and validated!

### Health & Status

#### Health Check
```
GET /api/health
```

Returns server health status and uptime.

#### Test Endpoint
```
GET /api/test
```

Simple endpoint to verify server is running.

## Error Response Format

All errors follow this format:

```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "details": [ ... ] // Only for validation errors
  }
}
```

### Common Error Codes
- `400`: Bad Request (validation failed)
- `404`: Not Found
- `429`: Too Many Requests (rate limit exceeded)
- `500`: Internal Server Error

## Adding New Routes

When creating new routes that accept user input, follow this pattern:

```javascript
import { asyncHandler, APIError } from '../middleware/errorHandler.js';
import { validate } from '../middleware/validators.js';
import { apiLimiter } from '../middleware/rateLimiter.js';
import cache from '../utils/cache.js';
import logger from '../utils/logger.js';

// Apply rate limiter
router.use(apiLimiter);

router.get('/your-route',
  yourValidationMiddleware,  // Add validation
  asyncHandler(async (req, res) => {
    // 1. Extract and validate params
    const { param1, param2 } = req.query;

    // 2. Check cache
    const cacheKey = cache.generateKey('your-route', { param1, param2 });
    const cached = cache.get(cacheKey);

    if (cached) {
      return res.json({ success: true, data: cached, cached: true });
    }

    // 3. Fetch from API
    logger.info('Fetching from external API');
    const data = await yourAPICall(param1, param2);

    if (!data) {
      throw new APIError('No data returned', 500);
    }

    // 4. Cache response (TTL in seconds)
    cache.set(cacheKey, data, 3600); // 1 hour

    // 5. Return response
    res.json({ success: true, data, cached: false });
  })
);
```

## Custom Validation

Create validation middleware in [validators.js](src/middleware/validators.js):

```javascript
import { query } from 'express-validator';
import { validate } from './validators.js';

export const validateYourInput = [
  query('paramName')
    .trim()
    .notEmpty()
    .withMessage('Parameter is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Must be 2-50 characters'),
  validate
];
```

## Available Validators

See [validators.js](src/middleware/validators.js) for all pre-built validators:
- `validateState` - US state validation
- `validateZipCode` - ZIP code format
- `validateAddress` - Street address
- `validatePagination` - Limit/offset pagination
- `validateJurisdiction` - State jurisdiction
- `validateStateAbbreviation` - 2-letter state codes
- `validateCoordinates` - Lat/long validation
- And more...

## Environment Variables

Create a `.env` file:

```env
PORT=5001
NODE_ENV=development
CONGRESS_API_KEY=your_key_here
OPENSTATES_API_KEY=your_key_here
```

## Future-Ready Features

This infrastructure is ready for:
- ✅ User authentication (add to `/auth` routes with `authLimiter`)
- ✅ Database integration (Prisma already set up)
- ✅ File uploads (add validation middleware)
- ✅ WebSockets (extend server.js)
- ✅ API versioning (create `/api/v2` routes)

## Development

```bash
npm run dev    # Start with auto-reload
npm start      # Production mode
```

## Logs

Check logs in:
- `logs/error.log` - Error logs only
- `logs/combined.log` - All logs

## Next Steps

When you start handling user input for civic lookups:

1. **Use existing validators** from `validators.js`
2. **Add your route** to `civic.js` following the pattern above
3. **Set appropriate cache TTL** based on data freshness needs
4. **Choose the right rate limiter** for your use case
5. **Test with invalid input** to ensure validation works

The infrastructure handles all the complex stuff (caching, rate limiting, error handling, logging) - you just focus on your business logic!
