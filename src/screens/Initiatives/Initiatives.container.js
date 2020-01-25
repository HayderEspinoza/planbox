import { connect } from 'react-redux';
import Initiatives from './Initiatives';
import { getInitiatives } from '../../store/initiatives/actions';
import selectors from '../../store/initiatives/reducers/selectors';

const mapStateToProps = state => {
  const selector = selectors(state);
  const initiatives = selector.getInitiatives();
  const status = selector.getInitiativesStatus();

  return {
    initiatives,
    ...status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInitiatives: () => dispatch(getInitiatives)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Initiatives);
