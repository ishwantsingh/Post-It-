export const upvoteAction = postId => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(postId)
      .update({
        upvotes: 1
      })
      .then(() => {
        dispatch({ type: "UPVOTE_POST_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "UPVOTE_POST_ERROR" }, err);
      });
  };
};
export const downvoteAction = postId => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(postId)
      .update({
        downvotes: 1
      })
      .then(() => {
        dispatch({ type: "DOWNVOTE_POST_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DOWNVOTE_POST_ERROR" }, err);
      });
  };
};
