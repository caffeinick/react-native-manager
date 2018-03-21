import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Confirm } from '../components/common';
import { employeeDelete } from '../actions';

class EmployeeDeleteScreen extends Component {
  onAccept() {
    const { uid } = this.props.navigation.state.params;

    this.props.employeeDelete({ uid });
    this.props.navigation.navigate('Home');
  }

  onDecline() {
    this.props.navigation.pop();
  }

  render() {
    return (
      <Confirm
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
      >
        Are you sure you want to fire?
      </Confirm>
    );
  }
}

EmployeeDeleteScreen.propTypes = {
  navigation: PropTypes.object,
  employeeDelete: PropTypes.func,
};

export default connect(null, { employeeDelete })(EmployeeDeleteScreen);
