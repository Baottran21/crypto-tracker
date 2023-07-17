/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';

//COMPONENTS
import Users from './components/Users.jsx';

//MAIN EXPORT
export const App = () => {
  const baseURL = 'http://localhost:8000';
  //STATES
  const [users, setUsers] = useState({}); //GET THE USERS
  const [selectedUser, setSelectedUser] = useState({}); //SELECTED THE USERS
  const [coins, setCoins] = useState({}); //GET THE COINS
  const [selectedCoin, setSelectedCoin] = useState({}); //SELECT THE COIN FROM THE USER DISPLAY

  //GETTING THE USER DATA FROM THE API
  useEffect(() => {
    const getUserData = async () => {
      const usersRes = await axios.get(`${baseURL}/users`);
      const userData = usersRes.data;
      // console.log(userData); //Returns an Array of Objects that are the users
      setUsers(userData);
    };

    getUserData();
  }, []);

  // console.log(users); //Array of Users

  return (
    <>
      <div id="landing-page">
        <div id="user-navigation">
          <h1 style={{ fontSize: 50 }}>Crypto Tracker</h1>
          <Users
            users={users}
            setUsers={setUsers}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
        <div id="main-display">
          {/* <Users
            users={users}
            setUsers={setUsers}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          /> */}
          {/* <CoinDisplay /> */}
        </div>
      </div>
    </>
  );
};
