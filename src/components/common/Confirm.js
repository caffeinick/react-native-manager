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
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'rgba(0,0,0,0)',
    flex: 1,
    justifyContent: 'center',
  },
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
};

export { Confirm };
