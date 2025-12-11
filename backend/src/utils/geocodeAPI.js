
const API_BASE_URL = 'https://api.mapbox.com/search/geocode/v6';

export async function forwardGeocode(address, options = {}) {
    const apiKey = process.env.GEO_CODE_API_KEY;

    if (!apiKey) {
        throw new Error('FOWARD GEOCODE API key not configured');
    }

    // Build query parameters
    const queryParams = new URLSearchParams({
        q: address,
        access_token: apiKey,
        country: options.country || 'us',
        language: options.language || 'en',
        limit: options.limit || 5
    });

    const url = `${API_BASE_URL}/forward?${queryParams}`;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Mapbox Geocoding Error: ${response.status} - ${error.message || 'Unknown error'}`);
    }

    const data = await response.json();

    // Return formatted response
    return {
        type: data.type,
        features: data.features.map(feature => ({
            coordinates: {
                longitude: feature.geometry.coordinates[0],
                latitude: feature.geometry.coordinates[1]
            },
            fullAddress: feature.properties.full_address,
            name: feature.properties.name,
            matchCode: feature.properties.match_code,
            context: feature.properties.context
        }))
    };
}

export async function reverseGeocode(longitude, latitude, options = {}) {
    const apiKey = process.env.GEO_CODE_API_KEY;

    if (!apiKey) {
        throw new Error('Mapbox API key not configured');
    }

    // Build query parameters
    const queryParams = new URLSearchParams({
        longitude,
        latitude,
        access_token: apiKey,
        country: options.country || 'us',
        language: options.language || 'en'
    });

    const url = `${API_BASE_URL}/reverse?${queryParams}`;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Mapbox Reverse Geocoding Error: ${response.status} - ${error.message || 'Unknown error'}`);
    }

    const data = await response.json();

    // Return formatted response
    if (!data.features || data.features.length === 0) {
        return {
            type: data.type,
            features: []
        };
    }

    return {
        type: data.type,
        features: data.features.map(feature => ({
            coordinates: {
                longitude: feature.geometry.coordinates[0],
                latitude: feature.geometry.coordinates[1]
            },
            fullAddress: feature.properties.full_address,
            name: feature.properties.name,
            matchCode: feature.properties.match_code,
            context: feature.properties.context
        }))
    };
}