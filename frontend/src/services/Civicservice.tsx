
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';


export interface Election {
    id: string;
    name: string;
    electionDay: string;
    ocdDivisionId: string;
}

export interface PollingLocation {
    address: {
        locationName?: string;
        line1: string;
        city: string;
        state: string;
        zip: string;
    };
    notes?: string;
    pollingHours?: string;
    startDate?: string;
    endDate?: string;
}

export interface Candidate {
    name: string;
    party?: string;
    candidateUrl?: string;
    phone?: string;
    email?: string;
    photoUrl?: string;
}

export interface Contest {
    type: string;           // "general", "primary", etc.
    office: string;     // "President", "U.S. Senate", etc.
    level?: string[];   // ["country", "state", "county", "city"]
    districts?: { 
        name: string;
        scope: string; // "stateUpper", "congressional", etc.
    }[];
    candidates?: Candidate[];
}


export interface StateInfo {
    name: string;
    electionAdministrationBody: {
        name?: string;
        electionInfoUrl?: string;
        votingLocationFinderUrl?: string;
        ballotInfoUrl?: string;
    };
}


export interface VoterInfoResponse {
    success: boolean;
    data: {
        election: Election;
        pollingLocations?: PollingLocation[];
        earlyVoteSites?: PollingLocation[];
        dropOffLocations?: PollingLocation[];
        contests?: Contest[];
        state?: StateInfo[];
    };
    cached: boolean; 
}


export interface ElectionsResponse {
    success: boolean;
    data: { 
        elections: Election[]; // since there are multiple elections
    };
    cached: boolean;
}


export interface GeocodedAddress {
    coordinates: {
        lat: number;
        lng: number;
    };
    fullAddress: string;
    name: string;
    matchCode: any;
    context: any;
}


export async function getVoterInfo(address: string, electionId?: string): Promise<VoterInfoResponse> {
    try{
        // Construct the URL with query parameters
        const params = new URLSearchParams({ address });
        if (electionId) {
            params.append('electionId', electionId.toString());
        }

        // Make a fetch request to the backend API
        const response = await fetch(`${API_BASE_URL}api/civic/voter-info?${params}`);

        if (!response.ok) {
            throw new Error(`Http error! status: ${response.status}`);
        }

        return await response.json();
        } catch (error) {
        console.error('Error fetching voter info:', error);
        throw error;
    }
}

/**
 * Get List of available elections
 * @returns list of all available elections
 */
export async function getElections(): Promise<ElectionsResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}api/civic/elections`);

        if (!response.ok) {
            throw new Error(`Http error! status: ${response.status}`);
        }
        
        return await response.json();
        } catch (error) {
        console.error('Error fetching elections:', error);
        throw error;
    }
}


export async function geocodeAddress(address: string): Promise<GeocodedAddress> {
    try {
        const params = new URLSearchParams({ address });
        
        const response = await fetch(`${API_BASE_URL}api/civic/geocode?${params}`);
        if (!response.ok) {
            throw new Error(`Http error! status: ${response.status}`);
        }
        
        return await response.json();
        } catch (error) {
        console.error('Error geocoding address:', error);
        throw error;
    }
}