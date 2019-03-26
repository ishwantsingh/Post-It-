import React from "react";
import { connect } from "react-redux";
import PostList from "../postFunctions/PostList";

const DevTeamList = props => {
  function filterByType(post) {
    if (post.type === "Dev Team") {
      return <PostList post={post} />;
    }
    return null;
  }
  return (
    <div className="project-list section">
      {props.post && props.post.map(post => filterByType(post))}
    </div>
  );
};

function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(DevTeamList);
