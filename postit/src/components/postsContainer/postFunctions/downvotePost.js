import { connect } from "react-redux";
import postIdGetter from "./postIdGetter";
import { downvoteAction } from "../../../state/actionCreators/votesAction";

function downvotePost(props, event) {
  console.log("totot", postIdGetter(event));
  //  return {};
  return props.downvoteAction(postIdGetter(event));
}

const mapDispatchToProps = dispatch => {
  return {
    downvoteAction: postId => dispatch(downvoteAction(postId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(downvotePost);

//export default downvotePost;
