//import libraries
import React, { PureComponent } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title
} from 'native-base';
import Initiative from '../../components/Initiative';
import Empty from '../../components/Empty';

// create a component
class Initiatives extends PureComponent {
  componentDidMount = () => {
    this.props.getInitiatives();
  };

  _renderItem = ({ item }) => {
    return <Initiative {...item} />;
  };

  render() {
    const { navigation, initiatives, status, getInitiatives } = this.props;
    return (
      <Container>
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
        <SafeAreaView style={styles.container}>
          <FlatList
            data={initiatives}
            refreshing={status === 'loading'}
            onRefresh={getInitiatives}
            contentContainerStyle={styles.content}
            renderItem={this._renderItem}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
            ListEmptyComponent={<Empty />}
          />
        </SafeAreaView>
      </Container>
    );
  }
}

Initiatives.propTypes = {
  getInitiatives: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flexGrow: 1
  },
  content: {
    alignItems: 'center',
    flex: 1
  }
});

//make this component available to the app
export default Initiatives;
