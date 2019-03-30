import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledFloatDiv = styled.div`
  width: 15%;
  margin: 74px 1% 0 0;
`;
const StyledI = styled.i`
  background-color: rgb(80, 139, 207);
`;

const Floatingbar = props => {
  const { auth } = props;
  const links = auth.uid ? (
    <div>
      <NavLink
        to="/create"
        className="btn-floating btn-large waves-effect waves-light "
      >
        <StyledI className="material-icons">+</StyledI>
      </NavLink>
      <button>Filter</button>
    </div>
  ) : null;
  return (
    <StyledFloatDiv>
      <div>{links}</div>
    </StyledFloatDiv>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Floatingbar);
