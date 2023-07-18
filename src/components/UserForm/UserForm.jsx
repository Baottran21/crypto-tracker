/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
export const UserForm = ({ users, setUsers, coins }) => {
  const baseURL = 'https://crypto-tracker-xvui.onrender.com';

  async function handleSubmit(e) {
    e.preventDefault();
    //CREATING A NEW USER OBJECT
    const newUser = { firstname: '', lastname: '', owned_coins: [] };
    newUser.firstname = e.target[0].value;
    newUser.lastname = e.target[1].value;
    for (let i = 2; i < e.target.length - 1; i++) {
      if (e.target[i].checked) newUser.owned_coins.push(e.target[i].id);
    }

    const addUser = await axios.post(`${baseURL}/users`, {
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      owned_coins: newUser.owned_coins,
    });

    alert(addUser.data);
    const updated = await axios.get(`${baseURL}/users`);
    setUsers(updated.data);
    e.target.reset();
  }

  return (
    <>
      <div id="user-form-container">
        <form id="user-form" action="" onSubmit={handleSubmit}>
          <div id="available-inputs">
            <input required type="text" placeholder="First Name" />
            <input required type="text" placeholder="Last Name" />

            <div id="available-coins">
              {coins.map((elem, index) => (
                <div key={index}>
                  <input type="checkbox" id={elem.symbol} name={elem.name} />
                  <label htmlFor={elem.name}>{elem.symbol}</label>
                </div>
              ))}
            </div>
            <input type="submit" />
          </div>
        </form>
        <h3>Copyright. Bao Tran 2023</h3>
      </div>
    </>
  );
};
