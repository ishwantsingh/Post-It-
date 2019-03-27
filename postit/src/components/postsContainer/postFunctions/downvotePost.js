import { connect } from "react-redux";
import postIdGetter from "./postIdGetter";
import { downvoteAction } from "../../../state/actionCreators/votesAction";

function downvotePost(event) {
  console.log("totot", postIdGetter(event));
  return {};
}

// const mapDispatchToProps = dispatch => {
//   return {
//     downvoteAction: postId => dispatch(downvoteAction(postId))
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(downvotePost);

export default downvotePost;
