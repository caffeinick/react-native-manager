import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employee }) {
    
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

EmployeeList.propTypes = {
  employeesFetch: PropTypes.func,
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name: 'S', id: '1j2j3j' }
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
