import React from "react";
import { connect } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import "./Navbar.css";

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : null;
  return (
    <nav className="nav-bar">
      <div>{links}</div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
