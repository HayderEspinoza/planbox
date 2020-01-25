import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Thumbnail } from 'native-base';
import { IMAGES, COLORS } from '../../utils/constants';
import LoginForm from './LoginForm';

class Login extends Component {
  componentDidUpdate = prevProps => {
    const { session, navigation, status, message } = this.props;
    if (status !== prevProps.status) {
      if (status === 'failed') {
        Alert.alert(
          'Login Error',
          message,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      }
      if (status === 'loaded' && session) navigation.navigate('Home');
    }
  };

  render() {
    const { logIn, status } = this.props;
    return (
      <Container style={styles.container}>
        <Content padder>
          <Thumbnail source={IMAGES.LOGO} style={styles.logo} />
          <LoginForm
            logIn={logIn}
            loading={status === 'loading'}
            initialValues={{
              email: 'hespinoza@nativapps.co',
              password: '1047459713hayder'
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY
  },
  logo: {
    width: 200,
    alignSelf: 'center',
    paddingVertical: 100
  }
});

Login.propTypes = {
  logIn: PropTypes.func.isRequired
};

export default Login;
