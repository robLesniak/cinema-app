import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import authReducer from "./authReducer";

import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  movie: movieReducer,
  firestore: firestoreReducer,
  user: authReducer
});
