import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import SignedInLinks from "./SignedInLinks";

const StyledNavbar = styled.div`
  width: 15%;
  margin: 3px 1.7% 0 0;
`;

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : null;
  return (
    <StyledNavbar>
      <div>{links}</div>
    </StyledNavbar>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
