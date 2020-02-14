import { connect } from 'react-redux';
import Iterations from './Iterations';
import selectors from '../../store/initiatives/reducers/selectors';
import {
  setInitiative,
  getCurrentItems,
  getNextItems,
  getBacklogItems,
  getUtils
} from '../../store/initiatives/actions';

const mapStateToProps = state => {
  const selector = selectors(state);
  const currentStatus = selector.getCurrentStatus();
  const nextStatus = selector.getNextStatus();
  const backlogStatus = selector.getBacklogStatus();
  const current = selector.getCurrentItems();
  const next = selector.getNextItems();
  const backlog = selector.getBacklogtItems();
  const initiative = selector.getInitiative();
  const utilsStatus = selector.getUtilsStatus();

  return {
    current,
    next,
    backlog,
    currentStatus,
    nextStatus,
    backlogStatus,
    initiative,
    utilsStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInitiative: id => dispatch(setInitiative(id)),
    getCurrentItems: data => dispatch(getCurrentItems(data)),
    getNextItems: data => dispatch(getNextItems(data)),
    getBacklogItems: data => dispatch(getBacklogItems(data)),
    getUtils: initiative => dispatch(getUtils(initiative))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Iterations);
