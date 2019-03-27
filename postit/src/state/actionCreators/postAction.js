import * as types from "./actionTypes";

const createPost = post => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(getState().firebase);
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("posts")
      .add({
        ...post,
        displayName: profile.displayName,
        avatarUrl: profile.avatarUrl,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: types.ADD_POST, post });
      })
      .catch(err => {
        dispatch({ type: types.CREATE_POST_ERROR }, err);
      });
  };
};

export default createPost;
