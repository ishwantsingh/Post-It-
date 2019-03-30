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
  width: 115px;
  margin-right: 30px;
  background-color: white;
  color: rgb(80, 139, 207);
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.9rem;
  display-flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  flex-wrap: nowrap;
  span {
    width: 100%;
    position: absolute;
    left: 9%;
    padding-right: 110px;
  }
`;
const StyledSvg = styled.img`
  margin-left: 40px;
  padding: 0px;
  text-align: left;
  height: 40px;
  width: 40px;
`;
function SignedOutLinks(props) {
  return (
    <StyledOutNav>
      <h5>
        <StyledLoginBut onClick={props.login} className="waves-effect btn">
          <StyledSvg src={googleSvg} alt="google" />
          <span>LOGIN </span>
        </StyledLoginBut>
      </h5>
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
