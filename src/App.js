import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import config from './bin/config';
import reducers from './reducers';
import MainNavigator from './navigators/MainNavigator';

const store = createStore(
  reducers, {}, applyMiddleware(ReduxThunk)
)

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
