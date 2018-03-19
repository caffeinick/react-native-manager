import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types'

import LoginForm from '../components/LoginForm';

class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LoginForm navigate={this.props.navigation.navigate}/>
      </SafeAreaView>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object,
}

export default withNavigation(LoginScreen);
