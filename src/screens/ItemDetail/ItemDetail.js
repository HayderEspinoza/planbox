//import libraries
import React, { PureComponent } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Icon,
  Tabs,
  Fab,
  Tab,
  Text,
  TabHeading,
  View
} from 'native-base';
import BackButton from '../../components/BackButton';
import { COLORS } from '../../utils/constants';
import Tasks from './Tasks';

// create a component
class ItemDetail extends PureComponent {
  componentDidMount = () => {
    this.refreshTask();
  };

  showInfo = description => {
    Alert.alert('Item description', description, [{ text: 'OK' }], {
      cancelable: false
    });
  };

  loadMoreTasks = () => {
    let {
      tasks: {
        meta: { page, total_pages }
      }
    } = this.props;

    if (page < total_pages) {
      const { id: initiative } = this.props.navigation.getParam('item');
      this.props.getTasks({ initiative, 'page[number]': ++page });
    }
  };

  selectTab = () => {};

  refreshTask = () => {
    const { id: initiative } = this.props.navigation.getParam('item');
    this.props.getTasks({ initiative, 'page[number]': 0 });
  };

  render() {
    const { navigation, tasks, tasksStatus, usersList } = this.props;
    const { name, description, links } = navigation.getParam('item');
    console.log('link', links.attachments.linkage.length);

    return (
      <Container style={styles.container}>
        <Header hasTabs>
          <Left>
            <BackButton />
          </Left>
          <Body style={{ alignItems: 'center' }}>
            <Title>{name}</Title>
          </Body>
          <Left style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => this.showInfo(description)}>
              <Icon
                name={'info-outline'}
                type={'MaterialIcons'}
                style={styles.infoIcon}
              />
            </TouchableOpacity>
          </Left>
        </Header>

        <Tabs onChangeTab={this.selectTab}>
          <Tab
            heading="Tasks"
            activeTextStyle={styles.active}
            textStyle={styles.tabText}>
            <SafeAreaView style={styles.safeArea}>
              <Tasks
                users={usersList}
                tasks={tasks}
                loading={tasksStatus === 'loading'}
                handleOptions={() => alert('prueba')}
                refresh={this.refreshTask}
                loadMore={this.loadMoreTasks}
              />
            </SafeAreaView>
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Text>Files</Text>
                <View style={styles.badge}>
                  <Text style={{ fontWeight: 'bold', fontSize: 13 }}>
                    {links.attachments.linkage.length}
                  </Text>
                </View>
              </TabHeading>
            }
            activeTextStyle={styles.active}
            textStyle={styles.tabText}>
            <Text>2</Text>
          </Tab>

          <Tab
            heading="Comments"
            activeTextStyle={styles.active}
            textStyle={styles.tabText}>
            <Text>3</Text>
          </Tab>
        </Tabs>

        <Fab
          direction="up"
          position="bottomRight"
          style={{ backgroundColor: COLORS.SUCCESS }}
          // onPress={this._openModalCreate}
        >
          <Icon type={'FontAwesome5'} name={'plus'} />
        </Fab>
      </Container>
    );
  }
}

ItemDetail.propTypes = {
  // getInitiatives: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4'
  },
  infoIcon: {
    fontSize: 25,
    color: '#fff',
    paddingLeft: 20
  },
  tabText: {
    color: '#fff'
  },
  active: {
    color: COLORS.SUCCESS
  },
  safeArea: {
    flexGrow: 1
  },
  badge: {
    backgroundColor: '#fff',
    color: COLORS.PRIMARY,
    fontSize: 13,
    width: 17,
    height: 17,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

//make this component available to the app
export default ItemDetail;
