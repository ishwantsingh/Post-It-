import * as types from "../actionCreators/actionTypes";
const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return { ...state, authError: null };
    case types.AUTH_FAIL:
      return { ...state, authError: "auth failed" };
    default:
      return state;
  }
};

export default authReducer;
