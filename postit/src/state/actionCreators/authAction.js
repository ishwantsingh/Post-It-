import * as types from "./actionTypes";

export const login = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token.
          var token = result.credential.accessToken;
        }
        var user = result.user;
      })
      .then(() => {
        dispatch({ type: "SPINNER_ON" });
      });

    // Start a sign in process for an unauthenticated user.
    var promise1 = new Promise(function() {});
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    firebase.auth().signInWithRedirect(provider);
    promise1.then(() => {
      dispatch({ type: types.AUTH_SUCCESS });
      dispatch({ type: "SPINNER_OFF" });
    });

    //   .catch(err => {
    //     dispatch({ type: types.AUTH_FAIL, err });
    //   });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
