import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'employee_update',

    // prop === 'name' || 'phone' || 'shift'
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift, navigation }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: 'employee_created' });
        navigation.pop();
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: 'employees_fetch_success', payload: snapshot.val() });
      });
  };
};
