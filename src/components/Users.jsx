import { UsersItem } from './UsersItem';

const Users = (users) => {
  //   console.log(users);
  return <UsersItem user={users.users} coins={users.coins} />;
};

export default Users;
