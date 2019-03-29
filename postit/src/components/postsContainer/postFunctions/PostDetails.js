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
`;

const PostDetails = props => {
  const { post } = props;
  if (post) {
    return (
      <StyledContainer className="section post-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{post.type}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text details-div">
            <div className="user">
              <StyledProfileImg src={props.post.avatarUrl} alt="profile pic" />
              <span>{props.post.displayName}</span>
            </div>
            <div>
              <span>Upvotes: {props.post.upvotes} </span>
              <span> Downvotes: {props.post.downvotes}</span>
            </div>
            <div>{moment(post.createdAt.toDate()).calendar()}</div>
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
