import React from "react";
import PostList from "../postFunctions/PostList";

const MarketingPostList = props => {
  function filterByType(post) {
    if (post.type === "Marketing") {
      return <PostList post={post} />;
    }
    return null;
  }
  return (
    <div className="project-list section">
      {props.posts && props.posts.map(post => filterByType(post))}
    </div>
  );
};
export default MarketingPostList;
