import React, { Component } from "react";
import { connect } from "react-redux";
import createPost from "../../state/actionCreators/postAction";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  .btn {
    background-color: rgb(80, 139, 207);
  }
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
            <label htmlFor="type">
              <input
                list="types"
                name="myType"
                type="text"
                id="type"
                placeholder="Select Post Type:"
                onChange={this.handleChange}
              />
            </label>
            <datalist id="types">
              <option value="Announcement" />
              <option value="Dev Team" />
              <option value="Design Team" />
              <option value="Marketing" />
              <option value="HR" />
              <option value="Product Manager" />
            </datalist>
          </div>
          <br />
          <br />
          <br />
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Enter Post Content</label>
          </div>
          <div className="input-field">
            <button className="btn lighten-1">Create</button>
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
