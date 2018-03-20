import firebase from 'firebase';

export const emailChanged = email => {
  return {
    type: 'email_changed',
    payload: email
  };
};

export const passwordChanged = password => {
  return {
    type: 'password_changed',
    payload: password
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: 'login_user' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: 'login_user_fail' });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: 'login_user_success', payload: user });
};
