import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  border-radius: 50%;
`;

function User(props) {
  console.log(props.auth);
  return (
    <div>
      <h3>{props.auth.displayName}</h3>
      <StyledImg
        src={props.auth.photoURL}
        alt="profile pic"
        className="profile-img"
      />
    </div>
  );
}

export default User;
