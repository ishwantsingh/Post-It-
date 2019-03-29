import postReducer from "./postReducer";
import authReducer from "./authReducer";
import spinner from "./spinReducer";

import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  spin: spinner,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
