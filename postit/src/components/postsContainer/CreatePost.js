import React, { Component } from "react";
import { connect } from "react-redux";
import createPost from "../../state/actionCreators/postAction";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
`;
class CreatePost extends Component {
  state = {
    type: "",
    content: "",
    upvotes: 0,
    downvotes: 0
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createPost(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <StyledContainer>
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Post</h5>
          <div className="input-field">
            <input type="text" id="type" onChange={this.handleChange} />
            <label htmlFor="type">Project Type</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreatePost);
