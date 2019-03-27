import React from "react";
import PostList from "./postFunctions/PostList";
import "./postFunctions/PostList.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AllPostList = props => {
  if (!props.auth.uid) return <Redirect to="/login" />;
  if (props.posts) {
    return (
      <div className="container">
        <h1>All Posts!</h1>
        {props.posts &&
          props.posts.map(post => <PostList post={post} key={post.id} />)}
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Please Wait...</p>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { post: state.post.posts, auth: state.firebase.auth };
}

export default connect(mapStateToProps)(AllPostList);
