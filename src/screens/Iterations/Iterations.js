//import libraries
import React, { PureComponent } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { IMAGES, COLORS } from '../../utils/constants';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Text,
  Left,
  Body,
  Title,
  Button,
  Icon,
  Tabs,
  Tab
} from 'native-base';
import BackButton from '../../components/BackButton';

// create a component
class Iterations extends PureComponent {
  componentDidMount = () => {
    const id = this.props.navigation.getParam('id');
    console.log('id', id);
  };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <BackButton />
          </Left>
          <Body style={{ alignItems: 'center' }}>
            <Title>{name}</Title>
          </Body>
          <Left style={{ alignItems: 'flex-end' }}>
            <Button transparent>
              <Icon
                name={'filter-outline'}
                type={'MaterialCommunityIcons'}
                style={styles.filter}
              />
            </Button>
          </Left>
        </Header>
        <Tabs>
          <Tab heading="Current">
            <View>
              <Text>1</Text>
            </View>
          </Tab>
          <Tab heading="Next">
            <View>
              <Text>2</Text>
            </View>
          </Tab>
          <Tab heading="Backlog">
            <View>
              <Text>3</Text>
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

Iterations.propTypes = {
  checkToken: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  container: {}
});

//make this component available to the app
export default Iterations;
