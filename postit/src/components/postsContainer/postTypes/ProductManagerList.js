import React from "react";
import PostList from "../postFunctions/PostList";
import { connect } from "react-redux";

const ProductManagerList = props => {
  function filterByType(post) {
    if (post.type === "Product Manager") {
      return <PostList post={post} key={post.id} />;
    }
    return null;
  }
  return (
    <div className="container">
      <h1>Product Manager Post!</h1>
      {props.posts && props.posts.map(post => filterByType(post))}
    </div>
  );
};
function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(ProductManagerList);
