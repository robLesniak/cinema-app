import {
  SIGNUP_SUCCES,
  SIGNUP_ERROR,
  SIGNIN_SUCCES,
  SIGNIN_ERROR,
  SIGNOUT_SUCCESS
} from "../actions/types";

const initialState = {
  authError: null,
  User: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCES:
      console.log("signup succ");
      return {
        ...state,
        authError: null,
        User: action.payload
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      };
    case SIGNIN_SUCCES:
      console.log("signin succ");
      return {
        ...state,
        User: action.payload,
        authError: null
      };

    case SIGNIN_ERROR:
      console.log("signin error");
      return {
        ...state,
        authError: action.err.message
      };
    case SIGNOUT_SUCCESS:
      console.log("log out");
      return { state, authError: null };
    default:
      return state;
  }
};

export default authReducer;
