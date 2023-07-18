/* eslint-disable react/prop-types */
import { UserSelection } from './UserSelection';
import axios from 'axios';

const baseURL = 'http://localhost:8000';

export const Navigation = ({
  users,
  setUsers,
  selectedUser,
  setSelectedUser,
  userKey,
  setUserKey,
}) => {
  const handleDelete = async () => {
    const userDelete = await axios.delete(
      `${baseURL}/users/${selectedUser.users_id}`
    );
    alert(userDelete.data);
    const updated = await axios.get(`${baseURL}/users`);
    setUsers(updated.data);
    setSelectedUser({});
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
        <button onClick={handleDelete} style={{ marginLeft: '2vw' }}>
          Delete User
        </button>
      </div>
    </>
  );
};
