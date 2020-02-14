import { createActionTypes } from './../../../utils/helpers';

export default {
  SET_INITIATIVE: 'INITIATIVES/SET_INITIATIVE',
  SET_TIMEFRAME: 'INITIATIVES/SET_TIMEFRAME',
  ...createActionTypes('INITIATIVES', 'GET_INITIATIVES'),
  ...createActionTypes('INITIATIVES', 'GET_CURRENT_ITEMS'),
  ...createActionTypes('INITIATIVES', 'GET_NEXT_ITEMS'),
  ...createActionTypes('INITIATIVES', 'GET_BACKLOG_ITEMS'),
  ...createActionTypes('INITIATIVES', 'GET_UTILS'),
  ...createActionTypes('INITIATIVES', 'GET_TASKS')
};
