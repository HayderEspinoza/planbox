import { connect } from 'react-redux';
import Initiatives from './Initiatives';
// import { checkToken } from '../../store/authentication/actions';
// import selectors from '../../store/authentication/reducers/selectors';

const mapStateToProps = state => {
  // const selector = selectors(state);
  // const session = selector.getSession();
  // const status = selector.getCheckTokenStatus();

  return {
    // session,
    // status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // checkToken: () => dispatch(checkToken)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Initiatives);
