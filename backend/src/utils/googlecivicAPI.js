const API_BASE_URL = 'https://www.googleapis.com/civicinfo/v2';

/**
 * Get voter information for a specific address
 * @param {string} address - Voter's address
 * @param {number} electionId - Optional election ID (default: latest)
 * @returns {Promise<object>} - Voter info including polling locations
 */
async function fetchVoterInfoForElection(address, electionId, apiKey) {
    const queryParams = new URLSearchParams({ key: apiKey, address });
    if (electionId) queryParams.append('electionId', electionId);

    const response = await fetch(`${API_BASE_URL}/voterinfo?${queryParams}`);
    return response;
}

export async function getVoterInfo(address, electionId = null) {
    const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

    if (!apiKey) {
        throw new Error('Google Civic API key not configured');
    }

    // Try with the provided electionId first (or no ID to let Google auto-detect)
    let response = await fetchVoterInfoForElection(address, electionId, apiKey);

    // If Google can't find an election for this address, try each available election
    if (!response.ok) {
        const errorBody = await response.json();
        const isElectionUnknown = errorBody?.error?.message?.includes('Election unknown');

        if (isElectionUnknown && !electionId) {
            const electionsData = await getElections();
            const realElections = electionsData.elections?.filter(e => e.id !== '2000') || [];

            for (const election of realElections) {
                response = await fetchVoterInfoForElection(address, election.id, apiKey);
                if (response.ok) break;
            }
        }

        if (!response.ok) {
            const error = await response.json().catch(() => errorBody);
            throw new Error(`Google Civic API Error: ${response.status} - ${error.error?.message || 'Unknown error'}`);
        }
    }

    const data = await response.json();

    // Return formatted response
    return {
        election: data.election,
        pollingLocations: data.pollingLocations?.map(location => ({
            address: {
                locationName: location.address?.locationName,
                line1: location.address?.line1,
                city: location.address?.city,
                state: location.address?.state,
                zip: location.address?.zip
            },
            pollingHours: location.pollingHours,
            notes: location.notes
        })),
        earlyVoteSites: data.earlyVoteSites?.map(site => ({
            address: {
                locationName: site.address?.locationName,
                line1: site.address?.line1,
                city: site.address?.city,
                state: site.address?.state,
                zip: site.address?.zip
            },
            pollingHours: site.pollingHours,
            notes: site.notes
        })),
        dropOffLocations: data.dropOffLocations?.map(location => ({
            address: {
                locationName: location.address?.locationName,
                line1: location.address?.line1,
                city: location.address?.city,
                state: location.address?.state,
                zip: location.address?.zip
            },
            pollingHours: location.pollingHours,
            notes: location.notes
        })),
        contests: data.contests?.map(contest => ({
            type: contest.type,
            office: contest.office,
            level: contest.level,
            district: contest.district,
            candidates: contest.candidates?.map(candidate => ({
                name: candidate.name,
                party: candidate.party,
                candidateUrl: candidate.candidateUrl,
                phone: candidate.phone,
                email: candidate.email
            }))
        })),
        state: data.state
    };
}

/**
 * Get list of available elections
 * @returns {Promise<object>} - List of elections
 */
export async function getElections() {
    const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

    if (!apiKey) {
        throw new Error('Google Civic API key not configured');
    }

    const url = `${API_BASE_URL}/elections?key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Google Civic API Error: ${response.status} - ${error.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();

    // Return formatted response
    return {
        elections: data.elections?.map(election => ({
            id: election.id,
            name: election.name,
            electionDay: election.electionDay,
            ocdDivisionId: election.ocdDivisionId
        }))
    };
}