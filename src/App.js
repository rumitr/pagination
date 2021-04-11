import { useState } from "react";
import "./App.css";
import faker from "faker";
import Pagination from "./components/Pagination";

function getUsers(number = 19) {
  let users = [];
  for (let i = 0; i < number; i++) {
    users.push(getUser(i));
  }
  console.log(users);
  return users;
}
function getUser(index) {
  let user = {};
  user.id = index + 1;
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.jobTitle = faker.name.jobTitle();
  user.prefix = faker.name.prefix();
  user.suffix = faker.name.suffix();
  user.jobArea = faker.name.jobArea();

  user.phone = faker.phone.phoneNumber();
  return user;
}

function User({ user = {} }) {
  return (
    <h1>
      {user.id} - {user.firstName} {user.lastName}
    </h1>
  );
}

function App() {
  const [users, _setUsers] = useState(getUsers);
  return (
    <div className="App">
      <Pagination data={users} Component={User} />
    </div>
  );
}

export default App;
