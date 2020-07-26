import React from "react";
import data from "./Data.json";
import './userList.css';
import logoImg from '../Full_logo.png';

const userList = (props) => {
  const UserListItems = data[0].members.map((User) => (
    <p key={User.id} onClick={() => props.clickHandler(User)}>
      {User.real_name}
    </p>

  ));
  return <div>
    <div className={props.show ? "userListing hiding" : "userListing"}  >
      <div>
        <img src={logoImg} alt="not found" />
      </div>
      <h1>USERS</h1>
      {UserListItems}
    </div>
  </div>;
};

export default userList;
