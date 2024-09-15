document.getElementById('getPriceButton').addEventListener('click', async () => {
    const symbol = document.getElementById('symbolInput').value;
    try {
        const response = await fetch(`/api/stock?symbol=${symbol}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        document.getElementById('priceDisplay').innerText = `Current Price: $${data.price}`;
    } catch (error) {
        console.error('Failed to fetch stock price:', error);
        document.getElementById('priceDisplay').innerText = 'Failed to fetch stock price. Check console for details.';
    }
});