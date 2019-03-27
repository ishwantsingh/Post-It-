import React from "react";
import "./SignedOutLinks.css";
import { connect } from "react-redux";

import { login } from "../../state/actionCreators/authAction";

function SignedOutLinks(props) {
  return (
    <div>
      <div className="signed-out-nav">
        <h5>
          <button onClick={props.login} className="waves-effect btn">
            LOGIN
          </button>
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
