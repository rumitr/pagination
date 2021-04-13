import React from "react";

const ListTableItem = ({ user = {} }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.gender}</td>
      <td>{user.jobTitle}</td>
      <td>{user.phone}</td>
    </tr>
  );
};

export default ListTableItem;
