import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection, Button } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';
import { employeeCreate } from '../actions';

class EmployeeCreateScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Add Employee'
  };

  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation });
  }
  
  render() {
    console.log(this.props.navigation.state.params);
    
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

EmployeeCreateScreen.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  employeeCreate: PropTypes.func,
  shift: PropTypes.string,
  navigation: PropTypes.object,
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreateScreen);
