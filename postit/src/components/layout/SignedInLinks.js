import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDIv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 250px;
  nav a {
    color: rgb(80, 139, 207);
  }
  h5 {
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
  }
  a {
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    padding: 8px 10%;
  }
  h5:active {
    border-left: 5px solid rgb(80, 139, 207);
  }
`;
const StyledI = styled.button`
  width: 30%;
  background-color: rgb(80, 139, 207);
  text-align: center;
`;
const StyledBarDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 8px;
  .create {
    width: 100%;
    background-color: rgb(80, 139, 207);
    padding-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
      margin: 0;
      padding: 0 0 15px 0;
      text-align: center;
    }
  }
`;

function SignedInLinks() {
  return (
    <StyledDIv>
      <StyledBarDiv>
        <NavLink to="/create" className="btn create">
          <h4>+</h4>
        </NavLink>
        {/* <button>Filter</button> */}
      </StyledBarDiv>
      <h5 className="waves-effect white btn">
        <NavLink to="/">All Posts</NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/announcements">Announcements</NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/devteam">Dev Team</NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/desteam">Design Team</NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/marketing">Marketing</NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/hr">HR</NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/productmanager">Product Managers</NavLink>
      </h5>
    </StyledDIv>
  );
}

export default SignedInLinks;
