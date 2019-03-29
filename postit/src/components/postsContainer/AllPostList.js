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
  if (props.posts) {
    return (
      <StyledContainer>
        <h1>All Posts</h1>
        {props.posts &&
          props.posts.map(post => {
            return <PostList post={post} key={post.id} />;
          })}
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
