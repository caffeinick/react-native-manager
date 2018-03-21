import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Button } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';

class EmployeeEditScreen extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeEditScreen;
