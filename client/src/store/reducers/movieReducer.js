import { CREATE_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_MOVIE:
      return {
        ...state,
        movie: action.payload
      };

    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
}
