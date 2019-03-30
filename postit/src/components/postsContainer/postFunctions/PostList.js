import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import styled from "styled-components";

import { upvoteAction } from "../../../state/actionCreators/votesAction";
import { downvoteAction } from "../../../state/actionCreators/votesAction";
import UpvotePost from "./upvotePost";
import DownvotePost from "./downvotePost";

const StyledListDiv = styled.div`
  height: 155px;
  h1 {
    margin: 0 auto;
  }
  font-weight: bold;
`;

const StyledListDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 35px auto 10px auto;
  padding-top: 0px;
`;
const UserDiv = styled.div`
  width: 250px;
  text-align: left;
  display: flex;
  align-items: center;
`;

const StyledProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin: 0 8px 0 0;
`;
const StyledVotesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
`;
const StyledVotesDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const Number = styled.div`
  padding: 15px 0;
`;
const StyledPostType = styled.div`
  width: 270px;
`;
const StyledDate = styled.div`
  flex-grow: 1;
`;

const PostList = props => {
  return (
    <StyledListDiv className="card-panel hoverable">
      <Link
        to={"/post/" + props.post.id}
        key={props.post.id}
        className="container"
      >
        <div>
          <PostSummary post={props.post} />
        </div>
      </Link>
      <StyledListDetails>
        <UserDiv>
          <StyledProfileImg src={props.post.avatarUrl} alt="profile pic" />
          <span>{props.post.displayName}</span>
        </UserDiv>
        <StyledVotesContainer>
          <StyledVotesDiv>
            <UpvotePost postId={props.post.id} />
            <Number>{props.post.upvotes}</Number>
          </StyledVotesDiv>
          <StyledVotesDiv>
            <DownvotePost postId={props.post.id} />
            <Number>{props.post.downvotes}</Number>
          </StyledVotesDiv>
        </StyledVotesContainer>
        <StyledPostType>
          <span>{props.post.type}</span>
        </StyledPostType>
        <StyledDate>
          <p className="grey-text">
            {moment(props.post.createdAt.toDate()).format("l")}
          </p>
        </StyledDate>
      </StyledListDetails>
    </StyledListDiv>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    upvoteAction: postId => dispatch(upvoteAction(postId)),
    downvoteAction: postId => dispatch(downvoteAction(postId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostList);
