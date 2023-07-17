/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';

//COMPONENTS

//COMPONENTS
import { Navigation } from './components/Navigation/Navigation';
import { Users } from './components/Users/Users';
import { Coins } from './components/Coins/Coins';

//MAIN EXPORT
export const App = () => {
  const baseURL = 'http://localhost:8000';

  //STATES
  const [users, setUsers] = useState({}); //GET THE USERS
  const [selectedUser, setSelectedUser] = useState({}); //SELECT THE USER
  const [displayUser, setDisplayUser] = useState({}); //DISPLAY THE USER
  const [coins, setCoins] = useState({}); //GET THE COINS
  const [selectedCoin, setSelectedCoin] = useState({}); //SELECT THE COIN FROM THE USER DISPLAY

  //GETTING THE USER DATA FROM THE API
  useEffect(() => {
    const getUserData = async () => {
      const usersRes = await axios.get(`${baseURL}/users`);
      const userData = usersRes.data;
      setUsers(userData);
    };
    getUserData();
  }, []);

  console.log(users); //Array of Users

  return (
    <>
      <Navigation
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <div id="main-display">
        <Users users={users} />
        <Coins />
      </div>
    </>
  );
};
