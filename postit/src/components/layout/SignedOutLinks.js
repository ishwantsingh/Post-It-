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
function SignedOutLinks(props) {
  return (
    <StyledOutNav>
      <h5>
        <button onClick={props.login} className="waves-effect btn">
          LOGIN
        </button>
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
