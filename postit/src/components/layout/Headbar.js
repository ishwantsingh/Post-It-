import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import SignedOutLinks from "./SignedOutLinks";
import SignedInHeadbarLinks from "./SignedInHeadbarLinks";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin-right: 3%;
    margin-left: 7%;
  }
  .logo {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Headbar = props => {
  const { auth } = props;
  const links = auth.uid ? (
    <SignedInHeadbarLinks auth={props.auth} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <StyledDiv>
      <Link to="/" className="logo">
        POST-IT
      </Link>
      {links}
    </StyledDiv>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Headbar);
