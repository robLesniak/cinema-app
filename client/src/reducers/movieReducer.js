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
    default:
      return state;
  }
}
