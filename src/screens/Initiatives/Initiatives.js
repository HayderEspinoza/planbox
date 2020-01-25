//import libraries
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title
} from 'native-base';

// create a component
class Initiatives extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content>
          <Header>
            <Left>
              <Button transparent onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body style={{ alignItems: 'center' }}>
              <Title>Initiatives</Title>
            </Body>
            <Left />
          </Header>
          <Text>Prueba</Text>
        </Content>
      </Container>
    );
  }
}

Initiatives.propTypes = {
  // checkToken: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  container: {}
});

//make this component available to the app
export default Initiatives;
