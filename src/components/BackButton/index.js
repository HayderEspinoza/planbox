import React from 'react';
import { Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

const BackButton = ({ navigation }) => (
  <Button transparent onPress={() => navigation.goBack(null)}>
    <Icon name="arrow-back" />
  </Button>
);

//make this component available to the app
export default withNavigation(BackButton);
