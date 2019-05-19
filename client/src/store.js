import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";

const initialState = {};
const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

let store;

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (
  (window.navigator.userAgent.includes("Chrome") ||
    window.navigator.userAgent.includes("Firefox")) &&
  ReactReduxDevTools
) {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig, {
        attachAuthIsReady: true,
        useFirestoreForProfile: true,
        userProfile: "users"
      }),
      ReactReduxDevTools
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      reduxFirestore(firebaseConfig),
      reactReduxFirebase(firebaseConfig)
    )
  );
}

export default store;
