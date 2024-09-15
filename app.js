const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

app.use(express.static('public'));

app.get('/api/stock', async (req, res) => {
    const symbol = req.query.symbol;
    try {
        const apiResponse = await fetch(`${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
        const apiData = await apiResponse.json();
        const price = apiData['Global Quote'] && apiData['Global Quote']['05. price'];
        if (!price) {
            return res.status(400).json({ error: 'Invalid symbol or data not available.' });
        }
        res.json({ price: price });
    } catch (error) {
        console.error('Error fetching stock price:', error);
        res.status(500).json({ error: 'Failed to fetch stock price' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));