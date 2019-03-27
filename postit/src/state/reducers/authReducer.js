import * as types from "../actionCreators/actionTypes";
const initialState = {
  authError: null,
  authCompleted: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return { ...state, authCompleted: true, authError: null };
    case types.AUTH_FAIL:
      return { ...state, authError: "auth failed", authCompleted: false };
    default:
      return state;
  }
};

export default authReducer;
