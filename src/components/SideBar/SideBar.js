//import libraries
import React, { PureComponent } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Text, Header, Thumbnail } from 'native-base';

// create a component
class SideBar extends PureComponent {
  render() {
    const {
      session: { name, image, type }
    } = this.props;
    return (
      <Container>
        <View style={styles.container}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.type}>Type: {type}</Text>
          </View>
          <Thumbnail source={{ uri: image }} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
