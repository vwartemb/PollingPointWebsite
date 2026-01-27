// APP.TSX - MAIN ROUTING LOGIC
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import ElectionsPage from './pages/ElectionsPage.tsx';
import CandidatesPage from './pages/CandidatesPage.tsx';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/elections" element={<ElectionsPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;