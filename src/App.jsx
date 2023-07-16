/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Users from './components/Users.JSX';
// import Coins from './components/Coins.jsx';

export const App = () => {
  const [users, setUsers] = useState({});
  // const [coins, setCoins] = useState([]);
  const baseURL = 'http://localhost:8000';
  //GETTING THE USER DATA FROM THE API
  useEffect(() => {
    const getUserData = async () => {
      const usersRes = await axios.get(`${baseURL}/users`);
      const userData = usersRes.data;
      setUsers(userData);
    };

    getUserData();
  }, []);

  // useEffect(() => {
  //   const getCoinData = async () => {
  //     const coinsRes = await axios.get(`${baseURL}/coins`);
  //     const coinData = coinsRes.data;
  //     setCoins(coinData);
  //   };
  //   getCoinData();
  // }, []);

  // console.log(users);
  // console.log(coins);
  return (
    <>
      <div id="landing-page">
        <div id="card-container">
          <div id="card">
            <Users users={users} />
            {/* <Coins users={users} coins={coins} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
