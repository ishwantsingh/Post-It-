import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
import "./PostList.css";

export default function PostList(props) {
  return (
    <div className="container collection">
      <div>
        <PostSummary post={props.post} />
      </div>
      <div className="list-details">
        <span>Author:{props.post.authorName}</span>
        <span>Upvotes:{props.post.upvotes}</span>
        <span>{props.post.type}</span>
      </div>
    </div>
  );
}
