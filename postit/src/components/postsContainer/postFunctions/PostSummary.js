import React from "react";

export default function PostSummary(props) {
  return <div>{props.post.content.substr(0, 180)}...</div>;
}
