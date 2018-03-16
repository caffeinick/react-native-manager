import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';

import LoginForm from '../components/LoginForm';

class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LoginForm />
      </SafeAreaView>
    );
  }
}

export default withNavigation(LoginScreen);
