import { connect } from 'react-redux';
import Login from './Login';
import { logIn } from './../../store/authentication/actions';
import selectors from './../../store/authentication/reducers/selectors';

const mapStateToProps = state => {
  const selector = selectors(state);
  const status = selector.getLogInStatus();
  const session = selector.getSession();
  return { status, session };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: data => dispatch(logIn(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
