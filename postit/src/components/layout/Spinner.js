import React from "react";
import { bool } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledSpinner = styled.div`
  .spinner {
    display: ${props => (props.spinnerOn ? "block" : "none")};
  }
  .children {
    display: ${props => (props.spinnerOn ? "none" : "block")};
  }
  margin: 0 16.5% 0 0;
`;

export function Spinner(props) {
  console.log(props);
  return (
    <StyledSpinner spinnerOn={props.spinner}>
      <div className="spinner">Please Wait...</div>
      <div className="children">{props.children}</div>
    </StyledSpinner>
  );
}

Spinner.propTypes = {
  spinner: bool
};

const mapStateToProps = function(state) {
  console.log(state);
  return { spinner: state.spin };
};

export default connect(mapStateToProps)(Spinner);
