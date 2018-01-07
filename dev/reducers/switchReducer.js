
import { SWITCH_FORECAST_LENGTH } from 'Helpers/constants';


export const switchReducer = (state = 'weather', action) => {
  switch (action.type) {
    case SWITCH_FORECAST_LENGTH:
      return action.variant
    default:
      return state;
  }

}