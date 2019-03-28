// const initialState = {
//   upvotes: 0,
//   downvotes: 0
// };

// const votesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "UPVOTE":
//       console.log("upvote success");
//       return { ...state, upvotes: state.upvotes + 1 };
//     case "DOWNVOTE":
//       console.log("create project error", action.err);
//       return { ...state, downvotes: state.downvotes - 1 };
//     default:
//       return state;
//   }
// };

// export default votesReducer;

const postId = (state = null, action) => {
  switch (action.type) {
    case "SET_ID":
      return (state = action.payload);
    default:
      return state;
  }
};

export default postId;
