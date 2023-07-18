/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';
import data from './../testData';
// console.log(data.data.coins);

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

  // console.log(users); //Array of Users
  // console.log(selectedUser);
  // console.log(userKey);
  // console.log(selectedCoin);

  return (
    <>
      <Navigation
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        userKey={userKey}
        setUserKey={setUserKey}
      />
      <div id="main-display">
        <Users
          selectedUser={selectedUser}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
        />
        <Coins selectedCoin={selectedCoin} coins={coins} />
      </div>
    </>
  );
};
