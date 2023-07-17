/* eslint-disable react/prop-types */
export const UserSelect = ({ selectedUser }) => {
  let coinList = selectedUser['owned_coins'];
  // console.log(coinList); //UNDEFINED WHEN THE PAGE STARTS THIS IS A BUG

  if (!Array.isArray(coinList) || coinList === undefined) {
    return <h1>Select A User</h1>;
  }

  return (
    <>
      <div>
        <h1>
          {selectedUser.firstname} {selectedUser.lastname}
        </h1>
        <select name="user-coin-selection" id="user-coin-selection">
          <option value="" hidden>
            Select A Coin
          </option>
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
