
import { SWITCH_TEMP } from 'Action/constants';

export const tempReducer = (state = "C", action) => {
  switch (action.type) {
    case SWITCH_TEMP:
      return action.temp
    default:
      return state;
  }

}
