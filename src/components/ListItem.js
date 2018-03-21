import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    this.props.navigation.navigate('Detail', { employee: this.props.item });
  }

  render() {
    const { name } = this.props.item;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object,
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

export default ListItem;
