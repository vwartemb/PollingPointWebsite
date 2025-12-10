import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [bills, setBills] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/civic/bills');
        if (!response.ok){
          throw new Error(`HTTP ERROR! STATUS: ${response.status}`);
        }
        const data = await response.json();
        setBills(data);
         console.log('Bills.data:', data);
      } catch (err){
        setError(err instanceof Error ? err.message : 'failed to fetch failed bills');
        console.log('error fetching bills:', err);
      } finally {setLoading(false)}

    };
    fetchBills();
  
  }, []);

  return (
    <div className="App">
      <h1>Polling Point</h1>
      <hr />
      <div>
        <h2>Recent Congressional Bills</h2>
        {loading && <p>Loading bills...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {bills && (
          <div>
            <p>Successfully fetched bills!</p>
            <pre style={{ textAlign: 'left', padding: '10px', overflow: 'auto' }}>
              {JSON.stringify(bills, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;