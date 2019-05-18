import { CREATE_COMMENT } from "../actions/types";

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comment: action.payload
      };

    case "CREATE_COMMENT_ERROR":
      console.log("create comment error", action.err);
      return state;
    default:
      return state;
  }
};

export default commentReducer;
