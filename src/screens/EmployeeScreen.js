import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

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
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <EmployeeList
            navigation={this.props.navigation}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

EmployeeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default withNavigation(EmployeeScreen);
