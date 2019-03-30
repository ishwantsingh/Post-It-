import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import SignedInLinks from "./SignedInLinks";

const StyledNavbar = styled.div`
  width: 16%;
  margin: 3px 1.7% 0 0;
  .nav-bar-div {
    display: ${props => (!props.auth ? "block" : "none")};
  }
`;

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : null;
  return (
    <StyledNavbar auth={props.uid}>
      <div className="nav-bar-div">{links}</div>
    </StyledNavbar>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
