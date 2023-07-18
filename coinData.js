import axios from 'axios';

const getCoins = async () => {
  let newCoins = [];
  const coinAPI = 'https://api.coinranking.com/v2/coins';
  await axios.get(`${coinAPI}`).then((response) => {
    newCoins = response.data.data.coins;
  });
  return newCoins;
};

export default getCoins;
