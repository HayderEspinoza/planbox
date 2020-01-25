import { REGEX, VALIDATION_ERRORS } from '../../../utils/constants';

const validate = values => {
  const { email, password } = values;
  const errors = {};

  if (!email) {
    errors.email = VALIDATION_ERRORS.REQUIRED_FIELD;
  } else if (!REGEX.EMAIL.test(email)) {
    errors.email = VALIDATION_ERRORS.INVALID_EMAIL;
  }

  if (!password) {
    errors.password = VALIDATION_ERRORS.REQUIRED_FIELD;
  }

  return errors;
};

export default validate;
