import React from "react";
import PostList from "./postFunctions/PostList";
import "./postFunctions/PostList.css";
import { connect } from "react-redux";

const AllPostList = props => {
  return (
    <div className="container">
      <h1>All Posts!</h1>
      {props.post && props.post.map(post => <PostList post={post} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(AllPostList);
