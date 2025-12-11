import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [bills, setBills] = useState<any>(null);
  const [members, setMembers] = useState<any>(null);
  const [jurisdictions, setJurisdictions]= useState<any>(null);
  const [statesbills, setStatesbills] = useState<any>(null);
  const [geocode, setGeocode] = useState<any>(null);
  const [elections, setElections] = useState<any>(null);
  const [voterInfo, setVoterInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch bills
        const billsResponse = await fetch('http://localhost:5001/api/civic/congress/bills');
        if (!billsResponse.ok) {
          throw new Error(`HTTP ERROR! STATUS: ${billsResponse.status}`);
        }
        const billsData = await billsResponse.json();
        setBills(billsData);
        console.log('Bills data:', billsData);

        // Fetch members
        const membersResponse = await fetch('http://localhost:5001/api/civic/congress/members');
        if (!membersResponse.ok) {
          throw new Error(`HTTP ERROR! STATUS: ${membersResponse.status}`);
        }
        const membersData = await membersResponse.json();
        setMembers(membersData);
        console.log('Members data:', membersData);
        
        // fetch jurisdictions
        const jurisdictionsResponse = await fetch('http://localhost:5001/api/civic/states/jurisdictions');
        if (!jurisdictionsResponse.ok){
          throw new Error(`HTTP ERROR! STATUS: ${jurisdictionsResponse.status}`);
      }
        const jurisdictionsData = await jurisdictionsResponse.json();
        setJurisdictions(jurisdictionsData);
        console.log('jurisdictions:',jurisdictionsData);

        // fetch statesbills
        const statesbillsResponse = await fetch('http://localhost:5001/api/civic/states/bills?jurisdiction=Illinois');
        if (!statesbillsResponse.ok){
          throw new Error(`HTTP ERROR! STATUS: ${statesbillsResponse.status}`);
      }
        const statebillsData = await statesbillsResponse.json();
        setStatesbills(statebillsData);
        console.log('statesbills data:',statebillsData);

        // Test geocoding
        const geocodeResponse = await fetch('http://localhost:5001/api/civic/geocode/forward?address=60640');
        if (!geocodeResponse.ok){
          throw new Error(`HTTP ERROR! STATUS: ${geocodeResponse.status}`);
        }
        const geocodeData = await geocodeResponse.json();
        setGeocode(geocodeData);
        console.log('Geocode data:',geocodeData);

        // Test Google Civic - Elections
        const electionsResponse = await fetch('http://localhost:5001/api/civic/elections');
        if (!electionsResponse.ok){
          throw new Error(`HTTP ERROR! STATUS: ${electionsResponse.status}`);
        }
        const electionsData = await electionsResponse.json();
        setElections(electionsData);
        console.log('Elections data:', electionsData);

        // Test Google Civic - Voter Info
        const voterInfoResponse = await fetch('http://localhost:5001/api/civic/voter-info?address=Chicago,IL');
        if (!voterInfoResponse.ok){
          throw new Error(`HTTP ERROR! STATUS: ${voterInfoResponse.status}`);
        }
        const voterInfoData = await voterInfoResponse.json();
        setVoterInfo(voterInfoData);
        console.log('Voter Info data:', voterInfoData);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }

    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Polling Point</h1>
      <hr />

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Bills Section */}
      {bills && (
        <div>
          <h2>Recent Congressional Bills</h2>
          <p>Successfully fetched {bills.data?.bills?.length || 0} bills!</p>
          <pre style={{ textAlign: 'left', padding: '10px', overflow: 'auto'}}>
            {JSON.stringify(bills, null, 2)}
          </pre>
        </div>
      )}

      {/* Members Section */}
      {members && (
        <div>
          <h2>Members of Congress</h2>
          <p>Successfully fetched {members.data?.members?.length || 0} members!</p>
          <pre style={{ textAlign: 'left', padding: '10px', overflow: 'auto'}}>
            {JSON.stringify(members, null, 2)}
          </pre>
        </div>
      )}

      {/* Jurisdictions Section */}
      {jurisdictions && (
        <div>
          <h2>State Jurisdictions (OpenStates)</h2>
          <p>Successfully fetched {jurisdictions.data?.results?.length || 0} jurisdictions!</p>
          <pre style={{ textAlign: 'left', padding: '10px', overflow: 'auto'}}>
            {JSON.stringify(jurisdictions, null, 2)}
          </pre>
        </div>
      )}

      {/* State Bills Section */}
      {statesbills && (
        <div>
          <h2>Illinois State Bills (OpenStates)</h2>
          <p>Successfully fetched {statesbills.data?.results?.length || 0} state bills!</p>
          <pre style={{ textAlign: 'left', padding: '10px', overflow: 'auto'}}>
            {JSON.stringify(statesbills, null, 2)}
          </pre>
        </div>
      )}

      {/* Geocoding Test Section */}
      {geocode && (
        <div>
          <h2>🗺️ Geocoding Test</h2>
          <p>Address: 60640</p>
          <p>✅ Coordinates: {geocode.data?.features?.[0]?.coordinates?.latitude}, {geocode.data?.features?.[0]?.coordinates?.longitude}</p>
          <p>Match: {geocode.data?.features?.[0]?.matchCode?.confidence}</p>
          <pre style={{ textAlign: 'left', padding: '10px', overflow: 'auto'}}>
            {JSON.stringify(geocode, null, 2)}
          </pre>
        </div>
      )}

      {/* Elections Test Section */}
      {elections && (
        <div>
          <h2>🗳️ Elections List</h2>
          <p>Successfully fetched {elections.data?.elections?.length || 0} elections!</p>
          <pre style={{ textAlign: 'left', padding: '10px', overflow: 'auto'}}>
            {JSON.stringify(elections, null, 2)}
          </pre>
        </div>
      )}

      {/* Voter Info Test Section */}
      {voterInfo && (
        <div>
          <h2>📍 Voter Information</h2>
          <p>Address: 1600 Pennsylvania Ave NW, Washington DC</p>
          <p>Election: {voterInfo.data?.election?.name}</p>
          <p>Polling Locations: {voterInfo.data?.pollingLocations?.length || 0}</p>
          <p>Contests: {voterInfo.data?.contests?.length || 0}</p>
          <pre style={{ textAlign: 'left', padding: '10px', overflow: 'auto'}}>
            {JSON.stringify(voterInfo, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;