import React, { Component } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

import EmployeeList from '../components/EmployeeList';

class EmployeeScreen extends Component {
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => { console.log(`right!!!`) }}
        title='info'
        color='#fff'
      />
    )
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <EmployeeList />
      </SafeAreaView>
    );
  }
}

export default withNavigation(EmployeeScreen);
