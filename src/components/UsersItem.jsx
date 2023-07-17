/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { UserSelect } from './UserSelect';
const UsersItem = ({ user, selectedUser, setSelectedUser }) => {
  //Figure out a way to handle when the event target is an empty string

  //HANDLE THE ERROR WHEN SELECTING THE FIRST OPTION
  const handleChange = (e) => {
    if (e.target.value == '') {
      return (
        <>
          <div id="user-display">
            <UserSelect selectedUser={selectedUser} />
            <select
              name="user-selection"
              id="user-selection"
              onChange={handleChange}
            >
              <option value="">Select A User</option>
              {user.map((elem, index) => (
                <option value={elem.users_id} key={index}>
                  {elem.firstname} {elem.lastname}
                </option>
              ))}
            </select>
          </div>
        </>
      );
    } else {
      return setSelectedUser(user[e.target.value - 1]);
    }
  };
  // console.log(selectedUser);
  return (
    <>
      <div id="user-select" style={{ marginLeft: 900, marginRight: 1200 }}>
        <UserSelect selectedUser={selectedUser} />
        <select
          name="user-selection"
          id="user-selection"
          onChange={handleChange}
        >
          <option value="" hidden>
            Select A User
          </option>
          {user.map((elem, index) => (
            <option value={elem.users_id} key={index}>
              {elem.firstname} {elem.lastname}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default UsersItem;
