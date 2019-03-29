import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
import "./PostList.css";
import moment from "moment";
import { connect } from "react-redux";

import { upvoteAction } from "../../../state/actionCreators/votesAction";
import { downvoteAction } from "../../../state/actionCreators/votesAction";
import UpvotePost from "./upvotePost";
import DownvotePost from "./downvotePost";

const PostList = props => {
  return (
    <div className="card-panel hoverable list-div">
      <Link
        to={"/post/" + props.post.id}
        key={props.post.id}
        className="container"
      >
        <div>
          <PostSummary post={props.post} />
        </div>
      </Link>
      <div className="list-details">
        <div className="user">
          <img
            src={props.post.avatarUrl}
            alt="profile pic"
            className="list-profile-img"
          />
          <span>{props.post.displayName}</span>
        </div>
        <div className="votes-container">
          <div className="votes-div">
            <UpvotePost postId={props.post.id} />
            <div className="number">{props.post.upvotes}</div>
          </div>
          <div className="votes-div">
            <DownvotePost postId={props.post.id} />
            <div className="number">{props.post.downvotes}</div>
          </div>
        </div>
        <div className="post-type">
          <span>{props.post.type}</span>
        </div>
        <div className="date">
          <p className="grey-text">
            {moment(props.post.createdAt.toDate()).format("l")}
          </p>
        </div>
      </div>
    </div>
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
