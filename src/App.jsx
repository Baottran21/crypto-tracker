/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:8000/users`);
      const data = await res.json();
      console.log(data); //Returned An Array
      setUsers(data);
    };

    getData();
  }, []);
  return (
    <>
      <button>Getting Data</button>
    </>
  );
};
