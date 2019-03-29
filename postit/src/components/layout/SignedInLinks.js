import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedInLinks.css";

function SignedInLinks() {
  return (
    <div>
      <div className="signed-in-nav">
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
        <h5 className="waves-effect white btn">
          <NavLink to="/create">Create Post</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/user">User</NavLink>
        </h5>
      </div>
    </div>
  );
}

export default SignedInLinks;
