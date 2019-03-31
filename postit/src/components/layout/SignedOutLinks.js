import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { login } from "../../state/actionCreators/authAction";
import googleSvg from "../../images/google.svg";

const StyledOutNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;
const StyledLoginBut = styled.button`
  width: 215px;
  margin-right: 30px;
  background-color: white;
  color: rgb(80, 139, 207);
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 3px;
  span {
    width: 100%;
    position: absolute;
    left: 5%;
    top: 0%;
    padding-right: 0px;
  }
`;
const StyledSvg = styled.img`
  position: absolute !important;
  left: -18%;
  top: -12%;
  margin-left: 40px;
  padding: 0px;
  text-align: left;
  height: 45px;
  width: 45px;
`;
function SignedOutLinks(props) {
  return (
    <StyledOutNav>
      <div>
        <StyledLoginBut onClick={props.login} className="waves-effect btn">
          <StyledSvg src={googleSvg} alt="google" />
          <span>Sign in with Google</span>
        </StyledLoginBut>
      </div>
    </StyledOutNav>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedOutLinks);
