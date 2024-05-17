const axios = require('axios');
const cheerio = require('cheerio');

export async function getMarketPrice(symbol) {
    try {
        const url = `https://merolagani.com/CompanyDetail.aspx?symbol=${symbol}`;
        const response = await axios.get(url);
        
        const $ = cheerio.load(response.data);    // Loading the HTML content of the webpage
        
        const marketPriceElement = $('#ctl00_ContentPlaceHolder1_CompanyDetail1_lblMarketPrice'); // Finding the element containing the market price
        const marketPrice = marketPriceElement.text().trim();
        return marketPrice;
    } catch (error) {
        console.error('Error fetching data:', error);
        return 'N/A';
    }
}

// const symbol = 'unl';
// getMarketPrice(symbol)
//     .then(marketPrice => console.log(`Market price of ${symbol}:`, marketPrice))
//     .catch(error => console.error('Error:', error));
