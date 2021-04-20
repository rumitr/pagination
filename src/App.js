import React from "react";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header>User List</header>
      <UserList />
    </div>
  );
};

export default App;
