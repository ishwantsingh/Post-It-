import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import penSvg from "../../images/pen.svg";
import postsSvg from "../../images/posts.svg";
import marketingSvg from "../../images/marketing.svg";
import productSvg from "../../images/product.svg";
import designSvg from "../../images/design.svg";
import laptopSvg from "../../images/laptop.svg";
import announcementSvg from "../../images/announcement.svg";
import hrSvg from "../../images/hr.svg";

const StyledDIv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  a:active {
    margin: 0 auto;
  }
  nav a {
    color: rgb(80, 139, 207);
  }
  h5 {
    .but-div {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
    font-size: 0.9em;
    span {
      width: 100%;
      height: 100%;
      padding: 0px;
      margin-bottom: 10px;
    }
  }
  a {
    margin-top: 0;
    margin-bottom: 0;
    padding: 4% 10%;
  }

  h5:active {
    border-left: 5px solid rgb(80, 139, 207);
  }
  .btn {
    width: 100%;
  }
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
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        padding: 5px 5px 0 0;
        margin-bottom: 0px;
      }
    }
  }
`;
const StyledPenSvg = styled.img`
  margin: 0;
  height: 40px;
  width: 40px;
`;
const StyledSvg = styled.img`
  margin: 0 0 -13px 0;
  padding: 0;
  height: 40px;
  width: 40px;
`;
const StyledPostSvg = styled.img`
  height: 35px;
  width: 35px;
  margin-bottom: 2px;
`;
const StyledPostSpan = styled.span`
  height: 45px;
  margin-bottom: 12px;
  margin-left: 5px;
`;
function SignedInLinks() {
  return (
    <StyledDIv>
      <StyledBarDiv>
        <NavLink to="/create" className="btn create">
          <h4>
            <StyledPenSvg src={penSvg} alt="pen" />
            <span> Compose</span>
          </h4>
        </NavLink>
        {/* <button>Filter</button> */}
      </StyledBarDiv>
      <h5 className="waves-effect white btn">
        <NavLink to="/" className="but-div">
          <StyledPostSvg src={postsSvg} alt="posts" />
          <StyledPostSpan> All Posts</StyledPostSpan>
        </NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/announcements">
          <StyledSvg src={announcementSvg} alt="Announcements" />
          <span>Announcements</span>
        </NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/devteam">
          <StyledSvg src={laptopSvg} alt="Dev Team" />
          <span>Dev Team</span>
        </NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/desteam">
          <StyledSvg src={designSvg} alt="Design Team" />
          <span>Design Team</span>
        </NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/marketing">
          <StyledSvg src={marketingSvg} alt="Marketing" />
          <span>Marketing</span>
        </NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/hr">
          <StyledSvg src={hrSvg} alt="HR" />
          <span>HR</span>
        </NavLink>
      </h5>
      <h5 className="waves-effect white btn">
        <NavLink to="/productmanager">
          <StyledSvg src={productSvg} alt="Product Managers" />
          <span>Product Managers</span>
        </NavLink>
      </h5>
    </StyledDIv>
  );
}

export default SignedInLinks;
