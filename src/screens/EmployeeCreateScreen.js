import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection, Button } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';
import { employeeCreate, employeeReset } from '../actions';

class EmployeeCreateScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Add Employee'
  };
  
  componentDidMount() {
    this.props.employeeReset();
  }

  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation });
  }
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Card>
          <EmployeeForm />

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
        </Card>
      </SafeAreaView>
    );
  }
}

EmployeeCreateScreen.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  navigation: PropTypes.object,
  employeeReset: PropTypes.func,
  employeeCreate: PropTypes.func,
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeCreate, employeeReset
})(EmployeeCreateScreen);
