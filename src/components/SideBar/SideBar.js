//import libraries
import React, { PureComponent } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Text, Header, Thumbnail, Icon } from 'native-base';

// create a component
class SideBar extends PureComponent {
  componentDidUpdate(prevProps) {
    const { session, navigation } = this.props;
    if (prevProps.session !== session && !session) {
      navigation.navigate('Login');
    }
  }

  render() {
    const {
      profile: { name, image },
      logOut
    } = this.props;

    return (
      <Container>
        <View style={styles.container}>
          <Thumbnail source={{ uri: image }} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.wrapOptions}>
          <View>
            <TouchableOpacity style={styles.option}>
              <Icon
                name={'chart-bar-stacked'}
                type={'MaterialCommunityIcons'}
                style={styles.icon}
              />
              <Text>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon
                name={'timer'}
                type={'MaterialCommunityIcons'}
                style={styles.icon}
              />
              <Text>Timesheets</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => logOut()} style={styles.option}>
              <Icon
                name={'logout'}
                type={'MaterialCommunityIcons'}
                style={styles.icon}
              />
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

SideBar.propTypes = {
  logOut: PropTypes.func.isRequired
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
  },
  wrapOptions: {
    flex: 1,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20
  },
  icon: {
    fontSize: 20,
    paddingRight: 10
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20
  }
});

//make this component available to the app
export default SideBar;
