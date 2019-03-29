import React, { Component } from "react";
import { connect } from "react-redux";

import { logout } from "../../state/actionCreators/authAction";

function Logout(props) {
  return (
    <div className="vote-button">
      <button onClick={props.logout} className="waves-effect btn">
        LOG OUT
      </button>
    </div>
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
)(Logout);
