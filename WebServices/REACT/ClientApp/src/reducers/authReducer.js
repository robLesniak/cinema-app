import { SIGNUP_SUCCES, SIGNUP_ERROR } from "../actions/types";

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
    default:
      return state;
  }
}
