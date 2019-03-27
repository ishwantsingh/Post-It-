import * as types from "../actionCreators/actionTypes";
const initialState = {
  fetchError: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST:
      console.log("create project success", action.post);
      return { ...state, fetchError: null };
    case types.CREATE_POST_ERROR:
      console.log("create project error", action.err);
      return { ...state, fetchError: action.err };
    default:
      return state;
  }
};

export default postReducer;
