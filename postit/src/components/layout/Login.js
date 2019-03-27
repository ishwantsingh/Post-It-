import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export function Login(props) {
  if (props.auth.uid) return <Redirect to="/" />;
  if (!props.auth.uid) {
    return (
      <div className="container">
        <h1>Awwww....</h1>
        <h2>Not Logged In?</h2>
        <h3>Click the Login Button to Login!</h3>
      </div>
    );
  } else if (props.status.requesting && !props.spin) {
    return (
      <div className="container center">
        <div class="progress">
          <div class="indeterminate" />
          <h1>Ples wait</h1>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authCompleted: state.auth.authCompleted,
    auth: state.firebase.auth,
    status: state.firestore.status,
    spin: state.spin
  };
};
export default connect(mapStateToProps)(Login);
