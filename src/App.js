import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import config from './bin/config';
import reducers from './reducers';
import RootNavigator from './navigators/RootNavigator';

const store = createStore(
  reducers, {}, applyMiddleware(ReduxThunk)
);

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
