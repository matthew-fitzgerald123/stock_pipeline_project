require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.use(express.static('public'));

app.get('/api/stock-price', (req, res) => {
    // Example using the API_KEY
    // Fetch stock prices from your chosen API and send the response
    res.json({ stock: 'AAPL', price: '150.00' }); // Placeholder example
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});