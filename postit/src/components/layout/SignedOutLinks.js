import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { login } from "../../state/actionCreators/authAction";

const StyledOutNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;
const StyledLoginBut = styled.button`
  width: 100px;
  margin-right: 30px;
  background-color: white;
  color: rgb(80, 139, 207);
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.9rem;
  display-flex;
  align-items: center;
`;
function SignedOutLinks(props) {
  return (
    <StyledOutNav>
      <h5>
        <StyledLoginBut onClick={props.login} className="waves-effect btn">
          LOGIN
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
