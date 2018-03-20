import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.item;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {name}
        </Text>
      </CardSection>
    )
  }
}

ListItem.propTypes = {
  item: PropTypes.object
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

export default ListItem;
