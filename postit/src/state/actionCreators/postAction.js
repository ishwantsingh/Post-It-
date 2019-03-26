import * as types from "./actionTypes";

export const postAction = (post = dispatch => {
  return () => {
    dispatch({ type: types.ADD_PROJECT });
  };
});
