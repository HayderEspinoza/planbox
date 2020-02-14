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
import Comments from './Comments';

// create a component
class ItemDetail extends PureComponent {
  componentDidMount = () => {
    this.getTasks();
    this.getComments();
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
      const { id: item } = this.props.navigation.getParam('item');
      this.props.getTasks({ item, 'page[number]': ++page });
    }
  };

  loadMoreComments = () => {
    let {
      comments: {
        meta: { page, total_pages }
      }
    } = this.props;

    if (page < total_pages) {
      const { id: item } = this.props.navigation.getParam('item');
      this.props.getComments({ item, 'page[number]': ++page });
    }
  };

  selectTab = () => {};

  getTasks = () => {
    const { id: item } = this.props.navigation.getParam('item');
    this.props.getTasks({ item, 'page[number]': 0 });
  };

  getComments = () => {
    const { id: item } = this.props.navigation.getParam('item');
    this.props.getComments({ item, 'page[number]': 0 });
  };

  render() {
    const {
      navigation,
      tasks,
      tasksStatus,
      usersList,
      comments,
      commentsStatus
    } = this.props;
    const { name, description, links } = navigation.getParam('item');

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
                refresh={this.getTasks}
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
            <Comments
              comments={comments}
              loading={commentsStatus === 'loading'}
              handleOption={() => alert('remove')}
              refresh={this.getComments}
              loadMore={this.loadMoreComments}
            />
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
  getTasks: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired
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
    justifyContent: 'center',
    marginBottom: -4
  }
});

//make this component available to the app
export default ItemDetail;
