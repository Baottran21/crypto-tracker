/* eslint-disable no-unused-vars */
export const Users = ({ selectedUser, selectedCoin, setSelectedCoin }) => {
  const UserCard = () => {
    if (selectedUser.owned_coins === undefined) {
      return BlankCard();
    }

    function handleClick(e) {
      // console.log(e.currentTarget.id);
      setSelectedCoin(e.currentTarget.id);
    }

    return (
      <>
        <div id="users-display-container">
          <div id="user-display">
            <h1 style={{ fontSize: 80 }}>
              {selectedUser.firstname} {selectedUser.lastname}
            </h1>
            <h2
              style={{
                fontSize: 50,
                margin: 0,
                textDecorationLine: 'underline',
              }}
            >
              Portfolio of Holdings
            </h2>
            {selectedUser.owned_coins.map((elem, index) => (
              <h3
                key={index}
                id={elem}
                style={{ fontSize: 40, margin: 0 }}
                onClick={handleClick}
              >
                {elem}
              </h3>
            ))}
          </div>
        </div>
      </>
    );
  };

  const BlankCard = () => {
    return (
      <>
        <div id="users-display-container">
          <h1 style={{ fontSize: 80 }}>Select A User</h1>
        </div>
      </>
    );
  };

  if (selectedUser === undefined) {
    return BlankCard();
  } else {
    return UserCard();
  }
};
