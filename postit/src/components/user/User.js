import React from "react";

function User(props) {
  console.log(props.auth);
  return (
    <div>
      <h3>{props.auth.displayName}</h3>
      <img
        src={props.auth.photoURL}
        alt="profile pic"
        className="profile-img"
      />
    </div>
  );
}

export default User;
