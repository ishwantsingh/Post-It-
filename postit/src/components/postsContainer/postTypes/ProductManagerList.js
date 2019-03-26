import React from "react";
import PostList from "../postFunctions/PostList";

const ProductManagerList = props => {
  function filterByType(post) {
    if (post.type === "Product Manager") {
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
export default ProductManagerList;
