//import libraries
import React, { PureComponent } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { IMAGES, COLORS } from '../../utils/constants';
import PropTypes from 'prop-types';

// create a component
class Loading extends PureComponent {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.checkToken();
    }, 800);
  };

  componentDidUpdate = prevProps => {
    const { navigation, session, status } = this.props;
    if (
      status !== prevProps.status &&
      (status === 'loaded' || status === 'failed')
    ) {
      if (session) navigation.navigate('Home');
      else navigation.navigate('AuthStack');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.PRIMARY} />
        <Image
          source={IMAGES.LOGO}
          style={styles.logo}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}

Loading.propTypes = {
  checkToken: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY
  },
  logo: {
    width: 160
  }
});

//make this component available to the app
export default Loading;
