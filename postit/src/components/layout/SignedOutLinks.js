import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/signin">SignIn</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SignedOutLinks;
