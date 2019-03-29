import React from "react";
import styled from "styled-components";

const StyledSummary = styled.div`
  text-align: left;
`;

export default function PostSummary(props) {
  return (
    <StyledSummary className="card-content grey-text text-darken-3">
      {props.post.content.substr(0, 150)}...
    </StyledSummary>
  );
}
