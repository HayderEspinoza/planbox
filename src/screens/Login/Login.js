import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Thumbnail } from 'native-base';
import { IMAGES, COLORS } from '../../utils/constants';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    const { logIn, status } = this.props;
    return (
      <Container style={styles.container}>
        <Content padder>
          <Thumbnail source={IMAGES.LOGO} style={styles.logo} />
          <LoginForm logIn={logIn} loading={status === 'loading'} />
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
  // checkToken: PropTypes.func.isRequired
};

export default Login;
