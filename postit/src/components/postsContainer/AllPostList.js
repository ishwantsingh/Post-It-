import React from "react";
import PostList from "./postFunctions/PostList";
import "./postFunctions/PostList.css";

const AllPostList = props => {
  return (
    <div className="container">
      <h1>All Posts!</h1>
      {props.posts && props.posts.map(post => <PostList post={post} />)}
    </div>
  );
};

export default AllPostList;
