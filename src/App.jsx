/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Users from './components/Users.jsx';
import { UserDisplay } from './components/UserDisplay.jsx';
import { CoinDisplay } from './components/CoinDisplay.jsx';
// import Coins from './components/Coins.jsx';

export const App = () => {
  const [users, setUsers] = useState({});
  // const [displayUsers, setDisplayUsers] = useState({});
  const [selectedUser, setSelectedUser] = useState({});

  // const [coins, setCoins] = useState([]);
  const baseURL = 'http://localhost:8000';
  //GETTING THE USER DATA FROM THE API
  useEffect(() => {
    const getUserData = async () => {
      const usersRes = await axios.get(`${baseURL}/users`);
      const userData = usersRes.data;
      // console.log(userData);
      setUsers(userData);
    };

    getUserData();
  }, []);

  // console.log(users); //Array of Users

  return (
    <>
      <div id="landing-page">
        <div id="user-navigation">
          <Users
            users={users}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
        <div id="main-display">
          <UserDisplay />
          <CoinDisplay />
        </div>
      </div>
    </>
  );
};
