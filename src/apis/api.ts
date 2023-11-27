const BASE_URL = `https://api.coinpaprika.com/v1`;
const CHART_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export const fetchCoinList = async () => {
    const response = await fetch(`${BASE_URL}/coins`);
    const data = response.json();
    return data;
};

export const getCoinPriceData = async (coinId) => {
    const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
    const data = response.json();
    return data;
};

export const getCoinChartData = async (coinId) => {
    const response = await fetch(`${CHART_URL}?coinId=${coinId}`);
    const data = response.json();

    if (!data) {
        console.error('해당 데이터가 존재하지 않습니다.');
    }
    return data;
};