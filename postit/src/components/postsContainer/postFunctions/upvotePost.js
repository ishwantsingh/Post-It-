// import React from "react";
// import { connect } from "react-redux";
// // import postIdGetter from "./postIdGetter";
import { upvoteAction } from "../../../state/actionCreators/votesAction";

// // function postId(event) {
// //   const postId = postIdGetter(event);
// //   return postId;
// // }

// function UpvotePost() {
//   //   const postId = postIdGetter();
//   console.log("totot");
//   //return {};
//   //return props.upvoteAction();
// }

// const mapStateToProps = state => {
//   console.log(state);
//   //  return { postId: state.postId };
// };
// // const mapDispatchToProps = dispatch => {
// //   return {
// //     upvoteAction: id => dispatch(upvoteAction(id))
// //   };
// // };

// export default connect(
//   mapStateToProps,
//   null
// )(UpvotePost);

// //export default upvotePost;

import React from "react";
import { connect } from "react-redux";

export const upvotePost = props => {
  console.log("UPvote props =>", props);
  return props => props.upvoteAction(props.id);
};

// function mapDispatchToProps(dispatch) {
//   return { upvoteAction };
// }
connect(
  null,
  { upvoteAction }
)(upvotePost);
