// Reusable Congress.gov API helper

const API_BASE_URL = 'https://api.congress.gov/v3';

/**
 * Makes a request to the Congress.gov API
 * @param {string} endpoint - API endpoint (e.g., '/bill', '/member')
 * @param {object} params - Query parameters (e.g., { limit: 20, offset: 0 })
 * @returns {Promise<object>} - API response data
 */
export async function fetchCongressData(endpoint, params = {}) {
    const apiKey = process.env.CONGRESS_API_KEY;

    if (!apiKey) {
        throw new Error('Congress API key not configured');
    }

    // Build query string
    const queryParams = new URLSearchParams({
        api_key: apiKey,
        format: 'json',
        ...params
    });

    const url = `${API_BASE_URL}${endpoint}?${queryParams}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Congress API Error: ${response.status}`);
    }

    return await response.json();
}
