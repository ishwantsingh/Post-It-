import React from "react";
import "./PostList.css";

export default function PostSummary(props) {
  return (
    <div className="card-content grey-text text-darken-3 summary">
      {props.post.content.substr(0, 150)}...
    </div>
  );
}
