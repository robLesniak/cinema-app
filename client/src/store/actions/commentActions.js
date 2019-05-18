export const createComment = comment => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("comments").add({
      ...comment,
      createdAt: new Date()
    });
    dispatch({
      type: "CREATE_COMMENT",
      comment
    });
  };
};
