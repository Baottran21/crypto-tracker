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
  selectedCoin,
  setSelectedCoin,
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
        <h1 style={{ fontSize: '3rem', marginLeft: '1vw' }}>Crypto Tracker</h1>
        <UserSelection
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          userKey={userKey}
          setUserKey={setUserKey}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
        />
        <div
          id="user-input"
          style={{
            fontSize: 50,
            margin: 0,
            marginLeft: '3vw',
            display: 'flex',
            justifyContent: 'center',
            width: '10vw',
          }}
        >
          <button onClick={handleDelete} style={{ marginRight: '0.5vw' }}>
            Delete User
          </button>

          <button>Add User</button>
        </div>
      </div>
    </>
  );
};
