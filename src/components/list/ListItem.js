import React from "react";
import "./ListItem.css";
import male from "../../assets/img_avatar.png";
import female from "../../assets/img_avatar2.png";

const ListItem = ({ user = {} }) => {
  return (
    <div className="list-item card">
      <img src={user.gender === "male" ? male : female} alt="" />
      <div className="name">
        <h4 className="name">{user.name}</h4>
        <h5 className="title">{user.jobTitle}</h5>
      </div>
    </div>
  );
};

export default ListItem;
