import React, { Component } from "react";
import { connect } from "react-redux";

import "./PostList.css";
import { upvoteAction } from "../../../state/actionCreators/votesAction";
import { unUpvoteAction } from "../../../state/actionCreators/votesAction";

class UpvotePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.postId,
      clicked: false
    };
    console.log(props);
  }

  handleSubmitUpvote = e => {
    e.preventDefault();
    console.log("submitUpvote props =>", this.state.postId);
    if (!this.state.clicked) {
      this.setState({ clicked: true });
      this.props.upvoteAction(this.state.postId);
    } else if (this.state.clicked) {
      this.setState({
        clicked: false
      });
      this.props.unUpvoteAction(this.state.postId);
    }
  };
  render() {
    return (
      <div className="vote-button">
        <form className="white" onSubmit={this.handleSubmitUpvote}>
          <button>Up :</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvoteAction: postId => dispatch(upvoteAction(postId)),
    unUpvoteAction: postId => dispatch(unUpvoteAction(postId))
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
)(UpvotePost);
