import React from "react";
import { connect } from "react-redux";
import PostList from "../postFunctions/PostList";

const MarketingPostList = props => {
  function filterByType(post) {
    if (post.type === "Marketing") {
      return <PostList post={post} key={post.id} />;
    }
    return null;
  }
  return (
    <div className="container">
      <h1>Marketing Post!</h1>
      {props.posts && props.posts.map(post => filterByType(post))}
    </div>
  );
};
function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(MarketingPostList);
