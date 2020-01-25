import { REQUEST_STATUSES } from './../../utils/constants';

export function forAllRegisters({
  FETCH,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  DEFAULT
} = {}) {
  return function fetchStatus(
    state = DEFAULT || { status: REQUEST_STATUSES.NOT_LOADED },
    action
  ) {
    switch (action.type) {
      case FETCH:
        return { status: REQUEST_STATUSES.NOT_LOADED };
      case FETCH_REQUEST:
        return { status: REQUEST_STATUSES.LOADING };
      case FETCH_SUCCESS:
        return { status: REQUEST_STATUSES.LOADED, payload: action.payload };
      case FETCH_FAILURE: {
        return {
          status: REQUEST_STATUSES.FAILED,
          ...action.payload
        };
      }
      default:
        return state;
    }
  };
}
