import React, { Component } from 'react';

import { Confirm } from '../components/common';

class EmployeeDeleteScreen extends Component {
  render() {
    return (
      <Confirm {...this.props}>
        Are you sure you want to fire?
      </Confirm>
    );
  }
}

export default EmployeeDeleteScreen;
