import { connect } from "react-redux";
import { downvoteAction } from "../../../state/actionCreators/votesAction";

export function downvotePost(props) {
  console.log("downvote props =>", props);
  return downvoteAction(props.id);
}

const mapDispatchToProps = dispatch => {
  return {
    downvoteAction: postId => dispatch(downvoteAction(postId))
  };
};

connect(
  null,
  mapDispatchToProps
)(downvotePost);

//export default downvotePost;
