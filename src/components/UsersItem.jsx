/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { UserDisplay } from './UserDisplay';
const UsersItem = ({ user, selectedUser, setSelectedUser }) => {
  const handleChange = (e) => {
    console.log(e);
    return setSelectedUser(user[e.target.value - 1]);
  };
  console.log(selectedUser);
  return (
    <>
      <div id="user-display">
        <UserDisplay selectedUser={selectedUser} />
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
};

export default UsersItem;
