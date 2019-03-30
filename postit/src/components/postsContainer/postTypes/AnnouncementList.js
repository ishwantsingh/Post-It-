import React from "react";
import PostList from "../postFunctions/PostList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import orderedPost from "../postFunctions/orderedPost";

const StyledContainer = styled.div`
  width: 100%;
  h1 {
    margin: 0 auto;
  }
`;
const AnnouncementList = props => {
  if (!props.auth.uid) return <Redirect to="/login" />;
  // function compare(a, b) {
  //   if (a.upvotes > b.upvotes) return -1;
  //   if (a.upvotes < b.upvotes) return 1;
  //   return 0;
  // }
  // function myFunction2(posts) {
  //   console.log(props);
  //   let orderedPost = posts.sort(compare);
  //   console.log(orderedPost);
  //   return (
  //     orderedPost &&
  //     orderedPost.map(post => {
  //       return filterByType(post);
  //     })
  //   );
  // }

  function filterByType(post) {
    if (post.type === "Announcement") {
      console.log("lala", post);
      return <PostList post={post} key={post.id} />;
    }
    return null;
  }
  if (props.posts)
    return (
      <StyledContainer>
        <h1>Announcements!</h1>
        {/* {props.posts && props.posts.map(post => filterByType(post))} */}
        {orderedPost(props.posts, filterByType)}
      </StyledContainer>
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
