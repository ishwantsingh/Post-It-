import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { logout } from "../../state/actionCreators/authAction";

const StyledHeadDiv = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  justify-content: flex-end;
  margin: 0 3% 0 0;
  a {
    margin-top: 0 !important;
  }
`;

const StyledUserImg = styled.img`
  margin-top: 7px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
`;

const StyledLogoutBut = styled.button`
  width: 30%;
`;

function SignedInHeadbarLinks(props) {
  return (
    <StyledHeadDiv>
      <NavLink to="/user" className="link-user">
        <StyledUserImg
          src={props.auth.photoURL}
          alt="profile pic"
          className="profile-img"
        />
      </NavLink>
      <StyledLogoutBut onClick={props.logout} className="waves-effect btn">
        LOG OUT
      </StyledLogoutBut>
    </StyledHeadDiv>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedInHeadbarLinks);
