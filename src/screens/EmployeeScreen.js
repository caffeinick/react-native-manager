import React, { Component } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

import EmployeeList from '../components/EmployeeList';

class EmployeeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Create')}
        title='Add'
        color='#fff'
      />
    )
  });

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <EmployeeList />
      </SafeAreaView>
    );
  }
}

export default withNavigation(EmployeeScreen);
