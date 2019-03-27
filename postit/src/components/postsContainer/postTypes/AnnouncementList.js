import React from "react";
import PostList from "../postFunctions/PostList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AnnouncementList = props => {
  if (!props.auth.uid) return <Redirect to="/login" />;
  function filterByType(post) {
    if (post.type === "Announcement") {
      return <PostList post={post} key={post.id} />;
    }
    return null;
  }
  if (props.posts)
    return (
      <div className="container">
        <h1>Announcements!</h1>
        {props.posts && props.posts.map(post => filterByType(post))}
      </div>
    );
  else {
    return (
      <div className="container center">
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(AnnouncementList);
