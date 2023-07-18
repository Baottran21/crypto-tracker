/* eslint-disable react/prop-types */
import { UserSelection } from './UserSelection';
import axios from 'axios';

const baseURL = 'http://localhost:8000';

export const Navigation = ({
  users,
  selectedUser,
  setSelectedUser,
  userKey,
  setUserKey,
}) => {
  const handleDelete = async () => {
    const userDelete = await axios.delete(
      `${baseURL}/${selectedUser.users_id}`
    );
    console.log(userDelete);
  };
  return (
    <>
      <div id="nav">
        <h1 style={{ fontSize: 50, margin: 0, marginLeft: 20 }}>
          Crypto Tracker
        </h1>
        <UserSelection
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          userKey={userKey}
          setUserKey={setUserKey}
        />
        <button onClick={handleDelete}>Delete User</button>
      </div>
    </>
  );
};
