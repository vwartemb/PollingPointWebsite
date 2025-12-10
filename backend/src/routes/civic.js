import express from "express";
const router = express.Router();

// GET route to fetch recent bills
router.get('/bills', async (req, res) => {
    try {
        const apiKey = process.env.CONGRESS_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'Congress API key not configured' });
        }

        const response = await fetch(
            `https://api.congress.gov/v3/bill?api_key=${apiKey}&format=json&limit=20`
        );

        if (!response.ok) {
            throw new Error(`Congress API Error: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching bills:', error);
        res.status(500).json({ error: 'Failed to fetch bills from Congress API' });
    }
});

export default router;