import React from "react";
import "./userCard.css";
import male from "../assets/img_avatar.png";
import female from "../assets/img_avatar2.png";

const UserCard = ({ user = {} }) => {
  return (
    <div className="list-item card">
      <img src={user.gender === "male" ? male : female} alt="" />
      <div className="details">
        <p className="name">{user.name}</p>
        <p className="title">{user.jobArea}</p>
      </div>
    </div>
  );
};

export default UserCard;
