import dotenv from 'dotenv'
dotenv.config(); //load enviroment variables

import express from 'express';
import cors from 'cors';
import civicRoutes from './routes/civic.js';

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());
// google civic route 
app.use('/api/civic', civicRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Node backend is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});