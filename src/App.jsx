/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';
import data from './../testData';
import getCoins from './../coinData';

//COMPONENTS
import { Navigation } from './components/Navigation/Navigation';
import { Users } from './components/Users/Users';
import { Coins } from './components/Coins/Coins';
import { UserForm } from './components/UserForm/UserForm';

//MAIN EXPORT
export const App = () => {
  const baseURL = 'http://localhost:8000';
  //STATES
  const [users, setUsers] = useState({}); //GET THE USERS
  const [selectedUser, setSelectedUser] = useState({}); //SELECT THE USER
  const [userKey, setUserKey] = useState(-1); //SELECTING THE KEY FOR THE SELECTION
  // const [displayUser, setDisplayUser] = useState({}); //DISPLAY THE USER
  const [coins, setCoins] = useState(data.data.coins); //GET THE COINS
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

  //GETTING THE COIN DATA FROM THE API
  useEffect(() => {
    const executeNewCoin = async () => {
      const newCoins = await getCoins();
      console.log(newCoins);
      setCoins(newCoins);
    };
    executeNewCoin();
  }, []);

  return (
    <>
      <Navigation
        users={users}
        setUsers={setUsers}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        userKey={userKey}
        setUserKey={setUserKey}
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
      />
      <div id="main-display">
        <Users
          selectedUser={selectedUser}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
        />
        <Coins selectedCoin={selectedCoin} coins={coins} />
      </div>
      <UserForm users={users} setUsers={setUsers} coins={coins} />
    </>
  );
};
