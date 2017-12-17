
import { LOAD_DATA_SUCCESS } from '../helpers/constants';

export const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return action.data
    default:
      return state;
  }
};