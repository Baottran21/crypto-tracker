/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Users from './components/Users.jsx';
import Coins from './components/Coins.jsx';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [coins, setCoins] = useState([]);
  const baseURL = 'http://localhost:8000';
  //GETTING THE DATA FROM THE API
  useEffect(() => {
    const getData = async () => {
      const usersRes = await axios.get(`${baseURL}/users`);
      const coinsRes = await axios.get(`${baseURL}/coins`);
      // console.log(usersRes); //Returned An Object of Users
      // console.log(coinsRes); //Returned An Object of Coins
      setUsers(usersRes.data);
      setCoins(coinsRes.data);
    };

    getData();
  }, []);

  return (
    <>
      <Users users={users} coins={coins} />
      <Coins users={users} coins={coins} />
    </>
  );
};
