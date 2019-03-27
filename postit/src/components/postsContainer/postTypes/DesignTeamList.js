import React from "react";
import { connect } from "react-redux";
import PostList from "../postFunctions/PostList";

const DesignTeamList = props => {
  function filterByType(post) {
    if (post.type === "Design Team") {
      return <PostList post={post} key={post.id} />;
    }
    return null;
  }
  return (
    <div className="container">
      <h1>Design Team Post!</h1>
      {props.posts && props.posts.map(post => filterByType(post))}
    </div>
  );
};

function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(DesignTeamList);
