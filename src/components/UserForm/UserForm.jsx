/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
export const UserForm = ({ users, setUsers, coins }) => {
  //   console.log(coins);
  console.log(users);
  const baseURL = 'http://localhost:8000';

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = { firstname: '', lastname: '', owned_coins: [] };
    newUser.firstname = e.target[0].value;
    newUser.lastname = e.target[1].value;
    for (let i = 2; i < e.target.length - 1; i++) {
      if (e.target[i].checked) newUser.owned_coins.push(e.target[i].id);
    }
    console.log(newUser.owned_coins.length);
    const addUser = await axios.post(`${baseURL}/users`, {
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      owned_coins: newUser.owned_coins,
    });
    alert(addUser.data);
    const updated = await axios.get(`${baseURL}/users`);
    setUsers(updated.data);
  }

  return (
    <>
      <div id="user-form-container">
        <form id="user-form" action="" onSubmit={handleSubmit}>
          <input required type="text" placeholder="First Name" />
          <input required type="text" placeholder="Last Name" />
          {coins.map((elem, index) => (
            <div key={index}>
              <input type="checkbox" id={elem.symbol} name={elem.name} />
              <label htmlFor={elem.name}>{elem.symbol}</label>
            </div>
          ))}
          <input type="submit" />
        </form>
      </div>
    </>
  );
};
