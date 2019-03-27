import upvotePost from "../../components/postsContainer/postFunctions/upvotePost";
import downvotePost from "../../components/postsContainer/postFunctions/downvotePost";

export const upvoteAction = post => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(upvotePost)
      .set({
        ...post,
        upvotes: upvotes + 1
      })
      .then(() => {
        dispatch({ type: "UPVOTE_POST_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "UPVOTE_POST_ERROR" }, err);
      });
  };
};
export const downvoteAction = post => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(downvotePost)
      .set({
        ...post,
        downvotes: downvotes + 1
      })
      .then(() => {
        dispatch({ type: "DOWNVOTE_POST_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DOWNVOTE_POST_ERROR" }, err);
      });
  };
};
