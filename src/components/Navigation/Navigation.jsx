/* eslint-disable react/prop-types */
import { UserSelection } from './UserSelection';

export const Navigation = ({
  users,
  selectedUser,
  setSelectedUser,
  userKey,
  setUserKey,
}) => {
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
      </div>
    </>
  );
};
