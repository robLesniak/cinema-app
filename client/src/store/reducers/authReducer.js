import {  SIGNUP_SUCCES, 
          SIGNUP_ERROR, 
          SIGNIN_SUCCES,
          SIGNIN_ERROR  } from "../actions/types";

const initialState = {
  Users: [],
  User: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCES:
      console.log('signup succ');
      return {
        ...state,
        User: action.payload
      };
    case SIGNUP_ERROR:
      return {
        ...state,
      }
    case SIGNIN_SUCCES:
    console.log('signin succ');
      return {
        ...state,
        User: action.payload
      }
    case SIGNIN_ERROR:
    console.log('signin error');
      return {
        ...state
      }
    default:
      return state;
  }
}
