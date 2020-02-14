import { connect } from 'react-redux';
import ItemDetail from './ItemDetail';
import selectors from '../../store/initiatives/reducers/selectors';
import { getTasks, getComments } from '../../store/initiatives/actions';

const mapStateToProps = state => {
  const selector = selectors(state);
  const tasks = selector.getTasks();
  const taskStatus = selector.getTasksStatus();
  const usersList = selector.getUsersList();
  const comments = selector.getComments();
  const commentsStatus = selector.getCommentsStatus();

  return { taskStatus, tasks, usersList, comments, commentsStatus };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: payload => dispatch(getTasks(payload)),
    getComments: payload => dispatch(getComments(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
