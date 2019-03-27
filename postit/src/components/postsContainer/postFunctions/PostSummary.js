import React from "react";

export default function PostSummary(props) {
  return (
    <div className="card-content grey-text text-darken-3">
      {props.post.content.substr(0, 150)}...
    </div>
  );
}
