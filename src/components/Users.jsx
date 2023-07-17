/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import UsersItem from './UsersItem';

const Users = ({ users, setUsers, selectedUser, setSelectedUser }) => {
  // console.log(users); //Array of users came through

  //Added a conditional rendering while the users are being loaded
  if (!Array.isArray(users)) {
    return <div>Loading Users</div>;
  }

  return (
    <>
      <UsersItem
        user={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </>
  );
};

export default Users;
