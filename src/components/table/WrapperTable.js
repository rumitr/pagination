import React from "react";
import "./wrapTable.css";

const WrapperTable = ({ children }) => {
  return (
    <div className="table-wrapper">
      <div>
        <h1>Table with pagination</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Gender</th>
            <th>Job Title</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default WrapperTable;
