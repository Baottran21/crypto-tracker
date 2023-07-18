import axios from 'axios';

async function getCoins() {
  const coinAPI = 'https://api.coinranking.com/v2/coins';
  await axios.get(`${coinAPI}`).then((response) => {
    return response.data;
  });
}

export default getCoins();
