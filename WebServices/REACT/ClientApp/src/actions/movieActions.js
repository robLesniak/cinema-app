export const createMovie = (movie, history) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("films").add({
      ...movie,
      createdAt: new Date()
    });
    history.push("/");
    dispatch({
      type: "CREATE_MOVIE",
      movie
    });
  };
};
