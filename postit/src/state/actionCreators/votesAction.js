// export const upvoteAction = postId => ({ getFirestore }) => {
//   //   return (dispatch, getState, { getFirestore }) => {
//   //     // make async call to database
//   //     console.log("balle balle");
//   //     const firestore = getFirestore();
//   //     firestore
//   //       .collection("posts")
//   //       .doc(postId)
//   //       .update({
//   //         upvotes: 1
//   //       })
//   //       .then(() => {
//   //         dispatch({ type: "UPVOTE_POST_SUCCESS" });
//   //       })
//   //       .catch(err => {
//   //         dispatch({ type: "UPVOTE_POST_ERROR" }, err);
//   //       });
//   //   };

//   console.log("balle balle", postId);
//   const id = postId;
//   console.log(id);
//   const firestore = getFirestore();
//   var upvoteRef = firestore.collection("posts").doc({ id });
//   return upvoteRef
//     .update({
//       upvotes: 1
//     })
//     .then(() => {
//       console.log("lol");
//     });
// };

export const upvoteAction = postId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(getState().firestore.data.posts[postId].upvotes);
    const postUpvotes = getState().firestore.data.posts[postId].upvotes;
    firestore
      .collection("posts")
      .doc(postId)
      .update({
        upvotes: postUpvotes + 1
      })
      .then(() => {
        dispatch({ type: "UPD_POST", postId });
      })
      .catch(err => {
        dispatch({ type: "ERR_UPD" }, err);
      });
  };
};

export const unUpvoteAction = postId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(getState().firestore.data.posts[postId].upvotes);
    const postUpvotes = getState().firestore.data.posts[postId].upvotes;
    firestore
      .collection("posts")
      .doc(postId)
      .update({
        upvotes: postUpvotes - 1
      })
      .then(() => {
        dispatch({ type: "UPD_POST", postId });
      })
      .catch(err => {
        dispatch({ type: "ERR_UPD" }, err);
      });
  };
};

export const downvoteAction = postId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log("lmao");
    const postDownvotes = getState().firestore.data.posts[postId].downvotes;
    firestore
      .collection("posts")
      .doc(postId)
      .update({
        downvotes: postDownvotes + 1
      })
      .then(() => {
        dispatch({ type: "DOWNVOTE_POST_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DOWNVOTE_POST_ERROR" }, err);
      });
  };
};

export const unDownvoteAction = postId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log("lmao");
    const postDownvotes = getState().firestore.data.posts[postId].downvotes;
    firestore
      .collection("posts")
      .doc(postId)
      .update({
        downvotes: postDownvotes - 1
      })
      .then(() => {
        dispatch({ type: "DOWNVOTE_POST_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DOWNVOTE_POST_ERROR" }, err);
      });
  };
};
