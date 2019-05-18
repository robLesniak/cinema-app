import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  movie: movieReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  firebase: firebaseReducer
});
