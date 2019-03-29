import React, { Component } from "react";
import { connect } from "react-redux";

import "./PostList.css";
import { downvoteAction } from "../../../state/actionCreators/votesAction";
import { unDownvoteAction } from "../../../state/actionCreators/votesAction";

class DownvotePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.postId,
      clicked: false
    };
    console.log(props);
  }

  handleSubmitDownvote = e => {
    e.preventDefault();
    console.log("submitDownvote props =>", this.state.postId);
    if (!this.state.clicked) {
      this.setState({ clicked: true });
      this.props.downvoteAction(this.state.postId);
    } else if (this.state.clicked) {
      this.setState({
        clicked: false
      });
      this.props.unDownvoteAction(this.state.postId);
    }
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
    downvoteAction: postId => dispatch(downvoteAction(postId)),
    unDownvoteAction: postId => dispatch(unDownvoteAction(postId))
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
