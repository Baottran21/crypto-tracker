/* eslint-disable react/prop-types */
export const Coins = ({ selectedCoin, coins }) => {
  for (let coin of coins) {
    if (coin.symbol === selectedCoin) {
      return (
        <>
          <div id="coins-display-container">
            <div id="coin-display">
              <img
                src={coin.iconUrl}
                alt={coin.name}
                style={{ width: 150, height: 150 }}
              />
              <h1 style={{ fontSize: 80, margin: '2vh' }}>
                Rank: #{coin.rank} {coin.symbol}
              </h1>
              <h2
                style={{
                  fontSize: 50,
                  margin: 0,
                  textDecorationLine: 'underline',
                }}
              >
                {' '}
                Price: ${Number(coin.price).toFixed(2)}
              </h2>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div id="coins-display-container">
        <div id="coin-display">
          <h1 style={{ fontSize: 80 }}>Coin Stats</h1>
        </div>
      </div>
    </>
  );
};
