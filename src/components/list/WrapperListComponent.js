import React from "react";
import "./WrapperList.css";

const WrapperListComponent = ({ children }) => {
  return (
    <div className="wrapper">
      <h1>Users List with pagination</h1>
      <div className="list">{children}</div>
    </div>
  );
};

export default WrapperListComponent;
