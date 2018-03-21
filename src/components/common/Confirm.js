import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children }) => {
  return (
    <View>
      <CardSection>
        <Text>{children}</Text>
      </CardSection>

      <CardSection>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  );
};

Confirm.propTypes = {
  children: PropTypes.string
};

export { Confirm };
