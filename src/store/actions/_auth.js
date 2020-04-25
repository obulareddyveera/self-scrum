import { authTypes } from "./../types/_auth";
import { firebase } from "./_firestore";

export const authGooglePlusUsers = (params) => (dispatch) => {
  dispatch({ type: authTypes.SELF_SCRUM_FIRESTORE_AUTH_BEGIN });
  const { email, password } = params;
  console.log('--== 2) Login <:::> onAuthGooglePlusUsers ==--', params);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({
        type: authTypes.SELF_SCRUM_FIRESTORE_AUTH_SUCCESS,
        payload: user,
      });
    })
    .catch((error) => {
      dispatch({
        type: authTypes.SELF_SCRUM_FIRESTORE_AUTH_SUCCESS,
        payload: error,
      });
    });
};
