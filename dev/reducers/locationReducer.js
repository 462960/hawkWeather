
import { LOCATION_SET_POSITION, LOCATION_SET_ERROR } from '../helpers/constants';

export function locationReducer(state = {}, action) {
  switch (action.type) {
    case LOCATION_SET_POSITION:
      return {
        latitude: action.latitude,
        longitude: action.longitude
      };
    default:
      return state;
  }
}
