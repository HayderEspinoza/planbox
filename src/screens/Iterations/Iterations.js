//import libraries
import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { ITERATIONS, COLORS } from '../../utils/constants';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Fab
} from 'native-base';
import BackButton from '../../components/BackButton';
import Next from './Next';
import Current from './Current';
import Backlog from './Backlog';

// create a component
class Iterations extends PureComponent {
  state = {
    activeTab: 0
  };

  componentDidMount = () => {
    const { getCurrentItems, navigation, setInitiative } = this.props;
    const id = navigation.getParam('id');
    setInitiative(id);
    getCurrentItems({ id });
  };

  selectTab = ({ i: activeTab }) => {
    this.setState({ activeTab });
    if (activeTab !== this.state.activeTab) this.getItems(activeTab);
  };

  refresh = () => {
    const { activeTab } = this.state;
    this.getItems(activeTab);
  };

  getItems(tab, filter = {}) {
    const {
      getCurrentItems,
      getNextItems,
      getBacklogItems,
      initiative: id
    } = this.props;

    if (tab === 0) getCurrentItems({ id, ...filter });
    if (tab === 1) getNextItems({ id, ...filter });
    if (tab === 2) getBacklogItems({ id, ...filter });
  }

  loadMore = () => {
    const { activeTab } = this.state;
    let {
      meta: { page, total_pages }
    } = this.props[ITERATIONS[activeTab]];

    if (page < total_pages)
      this.getItems(activeTab, { 'page[number]': ++page });
  };

  render() {
    const {
      navigation,
      current,
      backlog,
      next,
      currentStatus,
      nextStatus,
      backlogStatus
    } = this.props;

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

        <Tabs onChangeTab={this.selectTab}>
          <Tab
            heading="Current"
            activeTextStyle={styles.active}
            textStyle={styles.tabText}>
            <Current
              items={current}
              loading={currentStatus === 'loading'}
              refresh={this.refresh}
              loadMore={this.loadMore}
            />
          </Tab>
          <Tab
            heading="Next"
            activeTextStyle={styles.active}
            textStyle={styles.tabText}>
            <Next
              items={next}
              loading={nextStatus === 'loading'}
              refresh={this.refresh}
              loadMore={this.loadMore}
            />
          </Tab>
          <Tab
            heading="Backlog"
            activeTextStyle={styles.active}
            textStyle={styles.tabText}>
            <Backlog
              items={backlog}
              loading={backlogStatus === 'loading'}
              refresh={this.refresh}
              loadMore={this.loadMore}
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

Iterations.propTypes = {
  getCurrentItems: PropTypes.func.isRequired,
  getNextItems: PropTypes.func.isRequired,
  getBacklogItems: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
  tabText: {
    color: '#fff'
  },
  active: {
    color: COLORS.SUCCESS
  }
});

//make this component available to the app
export default Iterations;
