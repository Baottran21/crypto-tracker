/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const UsersItem = ({ user, selectedUser, setSelectedUser }) => {
  // console.log(user);
  //IF USER DOESNT HAVE ANY COINS
  // if (user.owned_coins[0].length === 0) {
  //   return (
  //     <>
  //       <div>
  //         <h1>
  //           {user.firstname} {user.lastname}
  //         </h1>
  //         <select>
  //           <option value="">No Owned Coins</option>
  //         </select>
  //       </div>
  //     </>
  //   );
  // }
  //USERS THAT HAVE COINS

  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    setSelectedUser(e.currentTarget.value);
  };

  return (
    <>
      <div>
        <label htmlFor="">Select A User</label>
        <select
          name="user-selection"
          id="user-selection"
          onChange={handleChange}
        >
          {user.map((elem, index) => (
            <option value={elem.users_id} key={index}>
              {elem.firstname} {elem.lastname}
            </option>
          ))}
        </select>
        {/* <h1>
          {user.firstname} {user.lastname}
        </h1>
        <select name="coin-selection" id="coin-selection">
          {user.owned_coins.map((elem, index) => (
            <option key={index}>{elem}</option>
          ))}
        </select> */}
      </div>
    </>
  );
};

export default UsersItem;
