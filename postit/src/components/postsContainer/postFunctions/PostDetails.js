import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import styled from "styled-components";

const StyledProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin: 0 8px 0 0;
`;

const StyledContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-top: -28px;
  .content {
    padding: 0;
  }
  .title {
    font-weight: bold;
    font-size: 2.3rem;
  }
`;
const StyledDetailsDiv = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledUserDiv = styled.div`
  display: flex;
  align-items: center;
`;

const PostDetails = props => {
  const { post } = props;
  if (post) {
    return (
      <StyledContainer className="section post-details">
        <div className="card z-depth-0">
          <span className="card-title title">{post.type}:</span>
          <StyledDetailsDiv className="card-action grey lighten-3 grey-text">
            <StyledUserDiv>
              <StyledProfileImg src={props.post.avatarUrl} alt="profile pic" />
              <span>{props.post.displayName}</span>
            </StyledUserDiv>
            <div>
              <span>Upvotes: {props.post.upvotes} </span>
              <span> Downvotes: {props.post.downvotes}</span>
            </div>
            <div>{moment(post.createdAt.toDate()).calendar()}</div>
          </StyledDetailsDiv>
          <div className="card-content content">
            <div>
              <div className="card-action grey lighten-4"> {post.content}</div>
            </div>
          </div>
        </div>
      </StyledContainer>
    );
  } else if (post === null) {
    return (
      <div className="container center">
        <p>Loading post...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;

  return {
    post: post
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
