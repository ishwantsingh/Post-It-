import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">All Posts</NavLink>
        </li>
        <li>
          <NavLink to="announcements">Announcements</NavLink>
        </li>
        <li>
          <NavLink to="devteam">Dev Team</NavLink>
        </li>
        <li>
          <NavLink to="desteam">Design Team</NavLink>
        </li>
        <li>
          <NavLink to="marketing">Marketing</NavLink>
        </li>
        <li>
          <NavLink to="hr">HR</NavLink>
        </li>
        <li>
          <NavLink to="productmanager">Project Managers</NavLink>
        </li>
        <li>
          <NavLink to="/">Create Post</NavLink>
        </li>
        <li>
          <NavLink to="user">User</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default SignedInLinks;
