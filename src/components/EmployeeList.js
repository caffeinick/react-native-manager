import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderItemFunc = ({ item }) => {
    return (
      <ListItem
        item={item}
      />
    );
  }

  render() {
    const employees = this.props.employees;
    
    return (
      <FlatList
        data={employees}
        extraData={this.props}
        renderItem={this.renderItemFunc}
        keyExtractor={item => `${item.uid}`}
      />
    );
  }
}

EmployeeList.propTypes = {
  employeesFetch: PropTypes.func,
  employees: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name: 'S', id: '1j2j3j' }
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
