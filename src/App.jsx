/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';
export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:8000/users`);
      console.log(res); //Returned An Object
      setUsers(res.data);
    };

    getData();
  }, []);
  return (
    <>
      <button>Getting Data</button>
    </>
  );
};
