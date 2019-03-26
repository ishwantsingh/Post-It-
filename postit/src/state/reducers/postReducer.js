import * as types from "../actionCreators/actionTypes";
const initialState = {};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PROJECT:
      return state;
    default:
      return state;
  }
};

export default postReducer;
