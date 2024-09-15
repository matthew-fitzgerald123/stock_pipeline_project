async function fetchStockPrice() {
    const symbol = document.getElementById('stock-symbol').value;
    if (!symbol) return alert('Please enter a stock symbol.');

    try {
        const response = await fetch(`/api/stock/${symbol}`);
        const data = await response.json();
        if (data.price) {
            document.getElementById('stock-price').innerText = `Current Price: $${data.price}`;
        } else {
            document.getElementById('stock-price').innerText = `Error: ${data.error}`;
        }
    } catch (error) {
        document.getElementById('stock-price').innerText = 'Failed to fetch stock price.';
    }
}
