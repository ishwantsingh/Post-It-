import { connect } from "react-redux";
import postIdGetter from "./postIdGetter";
import { upvoteAction } from "../../../state/actionCreators/votesAction";

function upvotePost(event) {
  console.log("totot", postIdGetter(event));
  return {};
  // return props.upwnvoteAction(postIdGetter(event));
}

// const mapDispatchToProps = dispatch => {
//   return {
//     upvoteAction: postId => dispatch(upvoteAction(postId))
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(upvotePost);
export default upvotePost;
