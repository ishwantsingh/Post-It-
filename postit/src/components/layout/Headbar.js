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
  margin-bottom: 15px;
  height: 53px;
  background-color: rgb(80, 139, 207);
  a {
    margin-right: 3%;
    margin-left: 5.8%;
  }
  .logo {
    color: white;
    font-size: 1.78rem;
    font-weight: bold;
    margin-bottom: 5px;
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
