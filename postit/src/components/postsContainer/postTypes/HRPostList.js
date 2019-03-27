import React from "react";
import { connect } from "react-redux";
import PostList from "../postFunctions/PostList";
import { Redirect } from "react-router-dom";

const HRPostList = props => {
  if (!props.auth.uid) return <Redirect to="/login" />;
  function filterByType(post) {
    if (post.type === "HR") {
      return <PostList post={post} key={post.id} />;
    }
    return null;
  }
  return (
    <div className="container">
      <h1>HR Post!</h1>
      {props.posts && props.posts.map(post => filterByType(post))}
    </div>
  );
};
function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(HRPostList);
