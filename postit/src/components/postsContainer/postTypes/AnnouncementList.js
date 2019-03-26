import React from "react";
import PostList from "../postFunctions/PostList";

const AnnouncementList = props => {
  function filterByType(post) {
    if (post.type === "Announcement") {
      return <PostList post={post} />;
    }
    return null;
  }
  return (
    <div className="project-list section">
      <h1>Announcements!</h1>
      {props.posts && props.posts.map(post => filterByType(post))}
    </div>
  );
};

export default AnnouncementList;
