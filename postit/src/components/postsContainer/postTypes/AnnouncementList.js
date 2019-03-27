import React from "react";
import PostList from "../postFunctions/PostList";
import { connect } from "react-redux";

const AnnouncementList = props => {
  function filterByType(post) {
    if (post.type === "Announcement") {
      return <PostList post={post} key={post.id} />;
    }
    return null;
  }
  return (
    <div className="container">
      <h1>Announcements!</h1>
      {props.posts && props.posts.map(post => filterByType(post))}
    </div>
  );
};

function mapStateToProps(state) {
  return { post: state.post.posts };
}

export default connect(mapStateToProps)(AnnouncementList);
