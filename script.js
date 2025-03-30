async function fetchPrices() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd";

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('btc').innerText = `BTC: $${data.bitcoin.usd}`;
        document.getElementById('eth').innerText = `ETH: $${data.ethereum.usd}`;
        document.getElementById('sol').innerText = `SOL: $${data.solana.usd}`;
    } catch (error) {
        document.getElementById('btc').innerText = "BTC: Error";
        document.getElementById('eth').innerText = "ETH: Error";
        document.getElementById('sol').innerText = "SOL: Error";
    }
}

fetchPrices();
setInterval(fetchPrices, 30000);
