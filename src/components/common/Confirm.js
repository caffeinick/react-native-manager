import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline }) => {
  const { containerStyle, cardSectionStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <CardSection style={cardSectionStyle}>
        <Text style={textStyle}>
          {children}
        </Text>
      </CardSection>

      <CardSection style={cardSectionStyle}>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  );
};

Confirm.propTypes = {
  children: PropTypes.string,
  onAccept: PropTypes.func,
  onDecline: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 80,
  },
};

export { Confirm };
