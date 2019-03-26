import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedOutLinks.css";

function SignedOutLinks() {
  return (
    <div>
      <div className="signed-out-nav">
        <h5 className="waves-effect waves-light btn">
          <NavLink to="/signup">Signup</NavLink>
        </h5>
        <h5 className="waves-effect waves-light btn">
          <NavLink to="/signin">SignIn</NavLink>
        </h5>
      </div>
    </div>
  );
}

export default SignedOutLinks;
