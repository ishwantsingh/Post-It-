import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { logout } from "../../state/actionCreators/authAction";

const StyledUserImg = styled.img`
  border-radius: 50%;
  height: 42px;
  width: 42px;
  margin-right: 20px;
`;
const StyledHeadButtons = styled.div`
  display: flex;
  align-items: center;
`;

function SignedInHeadbarLinks(props) {
  return (
    <StyledHeadButtons>
      <StyledUserImg
        src={props.auth.photoURL}
        alt="profile pic"
        className="profile-img"
      />
      <button onClick={props.logout} className="waves-effect btn">
        LOG OUT
      </button>
    </StyledHeadButtons>
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
