//import libraries
import React, { PureComponent } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Text, Header, Thumbnail } from 'native-base';

// create a component
class SideBar extends PureComponent {
  render() {
    const {
      user: { name, image }
    } = this.props;

    return (
      <Container>
        <View style={styles.container}>
          <Thumbnail source={{ uri: image }} />
          <Text style={styles.name}>{name}</Text>
        </View>
      </Container>
    );
  }
}

SideBar.propTypes = {
  // checkToken: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E7ECF1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: Platform.OS === 'ios' ? 60 : 20
  },
  name: {
    fontSize: 17,
    fontFamily: 'Cabin-SemiBold'
  },
  type: {
    fontSize: 16,
    textTransform: 'capitalize'
  }
});

//make this component available to the app
export default SideBar;
