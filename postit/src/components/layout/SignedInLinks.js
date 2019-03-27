import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedInLinks.css";
import { logout } from "../../state/actionCreators/authAction";
import { connect } from "react-redux";

function SignedInLinks(props) {
  return (
    <div>
      <div className="signed-in-nav">
        <h5 className="waves-effect white btn">
          <NavLink to="/">All Posts</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/announcements">Announcements</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/devteam">Dev Team</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/desteam">Design Team</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/marketing">Marketing</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/hr">HR</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/productmanager">Project Managers</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/create">Create Post</NavLink>
        </h5>
        <h5 className="waves-effect white btn">
          <NavLink to="/user">User</NavLink>
        </h5>
        <button onClick={props.logout} className="waves-effect btn">
          LOG OUT
        </button>
      </div>
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
)(SignedInLinks);
