import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedOutLinks.css";
import { connect } from "react-redux";

import { login } from "../../state/actionCreators/authAction";

function SignedOutLinks(props) {
  return (
    <div>
      <div className="signed-out-nav">
        <h5 className="waves-effect white btn">
          <NavLink to="/signup">Signup</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/signin">SignIn</NavLink>
        </h5>
        <h5>
          <button onClick={props.login}>LOGIN</button>
        </h5>
      </div>
    </div>
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
