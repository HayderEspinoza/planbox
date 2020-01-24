import LoginForm from './LoginForm';
import validate from './validate';
import { reduxForm } from 'redux-form';

export default reduxForm({ form: 'LoginForm', validate })(LoginForm);
