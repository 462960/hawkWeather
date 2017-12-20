
import { SWITCH_TEMP } from '../helpers/constants';

export const tempReducer = (state = "C", action) => {
  switch (action.type) {
    case SWITCH_TEMP:
      return action.temp
    default:
      return state;
  }

}
