// Reusable OpenStates API helper

const API_BASE_URL = 'https://v3.openstates.org';

/**
 * Makes a request to the OpenStates API v3
 * @param {string} endpoint - API endpoint (e.g., '/bills', '/people')
 * @param {object} params - Query parameters (e.g., { jurisdiction: 'Illinois', page: 1 })
 * @returns {Promise<object>} - API response data
 */
export async function fetchOpenStatesData(endpoint, params = {}) {
    const apiKey = process.env.OPEN_STATES_API_KEY;

    if (!apiKey) {
        throw new Error('Open States API key not configured');
    }

    // Build query string (OpenStates uses 'apikey' not 'api_key')
    const queryParams = new URLSearchParams({
        apikey: apiKey,
        ...params
    });

    const url = `${API_BASE_URL}${endpoint}?${queryParams}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`OpenStates API Error: ${response.status}`);
    }

    return await response.json();
}