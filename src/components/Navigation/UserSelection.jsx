/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const UserSelection = ({
  users,
  selectedUser,
  setSelectedUser,
  userKey,
  setUserKey,
}) => {
  //Conditional Rendering
  if (!Array.isArray(users)) {
    return <h1>Users Are loading</h1>;
  }

  function handleChange(event) {
    let index = event.currentTarget.selectedIndex;
    setUserKey(index);
    setSelectedUser(users[index - 1]);
  }

  return (
    <div id="user-selection-container">
      <select name="user-selection" id="user-selection" onChange={handleChange}>
        <option value="null">Select A User</option>
        {users.map((elem, index) => (
          <option key={index} value={elem.id}>
            {`${elem.firstname} ${elem.lastname}`}
          </option>
        ))}
      </select>
    </div>
  );
};
