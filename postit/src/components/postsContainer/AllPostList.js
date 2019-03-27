import React from "react";
import PostList from "./postFunctions/PostList";
import "./postFunctions/PostList.css";
import { connect } from "react-redux";

const AllPostList = ({ posts }) => {
  return (
    <div className="container">
      <h1>All Posts!</h1>
      {posts && posts.map(post => <PostList post={post} key={post.id} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(AllPostList);
