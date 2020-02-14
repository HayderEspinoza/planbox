import { connect } from 'react-redux';
import ItemDetail from './ItemDetail';
import selectors from '../../store/initiatives/reducers/selectors';
import { getTasks } from '../../store/initiatives/actions';

const mapStateToProps = state => {
  const selector = selectors(state);
  const tasks = selector.getTasks();
  const taskStatus = selector.getTasksStatus();
  const usersList = selector.getUsersList();

  return { taskStatus, tasks, usersList };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: payload => dispatch(getTasks(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
