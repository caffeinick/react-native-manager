import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import PropTypes from 'prop-types';

import { Card, CardSection, Button } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Employee Details'
  };

  componentDidMount() {
    _.each(this.props.navigation.state.params.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;
    
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.navigation.state.params.employee.uid,
      navigation
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Card>
          <EmployeeForm />
          
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}>
              Text Schedule
            </Button>
          </CardSection>
        </Card>
      </SafeAreaView>
    );
  }
}

EmployeeDetailScreen.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  navigation: PropTypes.object,
  employeeUpdate: PropTypes.func,
  employeeSave: PropTypes.func,
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave
})(EmployeeDetailScreen);
