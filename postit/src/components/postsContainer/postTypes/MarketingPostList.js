import React from "react";
import { connect } from "react-redux";
import PostList from "../postFunctions/PostList";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  h1 {
    margin: 0 auto;
  }
`;
const MarketingPostList = props => {
  if (!props.auth.uid) return <Redirect to="/login" />;
  function filterByType(post) {
    if (post.type === "Marketing") {
      return <PostList post={post} key={post.id} />;
    }
    return null;
  }
  if (props.posts)
    return (
      <StyledContainer>
        <h1>Marketing Post!</h1>
        {props.posts && props.posts.map(post => filterByType(post))}
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

export default connect(mapStateToProps)(MarketingPostList);
