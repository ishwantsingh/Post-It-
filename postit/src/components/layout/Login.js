import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export function Login(props) {
  console.log(props.auth);
  if (props.auth.uid) return <Redirect to="/" />;
  if (!props.auth.uid) {
    return (
      <div className="container">
        <h1>Awwww.... Not Logged In?</h1>
        <h3>Click the Login Button to Login!</h3>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <div class="progress">
          <div class="indeterminate" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Login);
