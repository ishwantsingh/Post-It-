import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";

import SignedOutLinks from "./SignedOutLinks";
import Logout from "./Logout";

const Headbar = props => {
  const { auth } = props;
  const links = auth.uid ? <Logout /> : <SignedOutLinks />;
  return (
    <div className="head-bar">
      <Link to="/">Post-it</Link>
      {links}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Headbar);
