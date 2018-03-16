import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import EmployeeList from '../components/EmployeeList';

class EmployeeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <EmployeeList />
      </SafeAreaView>
    );
  }
}

export default withNavigation(EmployeeScreen);
