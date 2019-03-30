import React from "react";
import PostList from "./postFunctions/PostList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  h1 {
    margin: 0 auto;
  }
`;

const AllPostList = props => {
  if (!props.auth.uid) return <Redirect to="/login" />;
  function compare(a, b) {
    if (a.upvotes > b.upvotes) return -1;
    if (a.upvotes < b.upvotes) return 1;
    return 0;
  }
  function myFunction2(posts) {
    let orderedPost = posts.sort(compare);
    console.log("working", orderedPost);
    return (
      orderedPost &&
      orderedPost.map(post => {
        return <PostList post={post} key={post.id} />;
      })
    );
  }
  if (props.posts) {
    return (
      <StyledContainer>
        <h1>All Posts</h1>
        {/* {props.posts &&
          props.posts.map(post => {
            return <PostList post={post} key={post.id} />;
          })} */}
        {myFunction2(props.posts)}
      </StyledContainer>
    );
  } else {
    return (
      <StyledContainer className="container center">
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </StyledContainer>
    );
  }
};

function mapStateToProps(state) {
  return { post: state.post.posts, auth: state.firebase.auth };
}

export default connect(mapStateToProps)(AllPostList);
