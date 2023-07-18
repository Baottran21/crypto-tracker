/* eslint-disable react/prop-types */
export const Coins = ({ selectedCoin, coins }) => {
  for (let coin of coins) {
    // console.log(coin);
    if (coin.symbol === selectedCoin) {
      return (
        <>
          <div id="coins-display-container">
            <div id="coin-display">
              <img
                src={coin.iconUrl}
                alt={coin.name}
                style={{ width: 100, height: 100 }}
              />
              <h1 style={{ fontSize: 80 }}>
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
                Price: {Number(coin.price).toFixed(2)}
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
