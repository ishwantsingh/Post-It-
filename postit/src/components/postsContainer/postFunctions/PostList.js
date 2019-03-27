import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
import "./PostList.css";
import moment from "moment";

export default function PostList(props) {
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
        <div className="votes">
          <span>Up: {props.post.upvotes} </span>
          <span> Down: {props.post.downvotes}</span>
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
}
