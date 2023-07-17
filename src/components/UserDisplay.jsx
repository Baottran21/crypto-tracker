/* eslint-disable react/prop-types */
export const UserDisplay = ({ selectedUser }) => {
  let coinList = selectedUser['owned_coins'];
  console.log(coinList);

  if (!Array.isArray(coinList)) {
    return <div>Select A User To Display Coins</div>;
  }
  return (
    <>
      <div>
        <h1>
          {selectedUser.firstname} {selectedUser.lastname}
        </h1>
        <select name="user-coin-selection" id="user-coin-selection">
          <option value="">Select A Coin</option>
          {selectedUser.owned_coins.map((elem, index) => (
            <option value={elem.users_id} key={index}>
              {elem}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
