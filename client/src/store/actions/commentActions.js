export const createComment = comment => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    firestore.collection("comments").add({
      ...comment,
      authorUsername: profile.username,
      authorId: uid,
      createdAt: new Date()
    });
    dispatch({
      type: "CREATE_COMMENT",
      comment
    });
  };
};
