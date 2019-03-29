import React, { Component } from "react";
import { connect } from "react-redux";

import "./PostList.css";
import { downvoteAction } from "../../../state/actionCreators/votesAction";

class DownvotePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.postId
    };
    console.log(props);
  }

  handleSubmitDownvote = e => {
    e.preventDefault();
    console.log("submitDownvote props =>", this.state.postId);
    this.props.downvoteAction(this.state.postId);
  };
  render() {
    return (
      <div className="vote-button">
        <form className="white" onSubmit={this.handleSubmitDownvote}>
          <button>Down :</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    downvoteAction: postId => dispatch(downvoteAction(postId))
  };
};

function mapStateToProps(state) {
  return {
    posts: state.firestore.ordered.posts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DownvotePost);
