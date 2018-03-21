import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Confirm } from '../components/common';

class EmployeeDeleteScreen extends Component {
  onAccept() {
    
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
};

export default EmployeeDeleteScreen;
