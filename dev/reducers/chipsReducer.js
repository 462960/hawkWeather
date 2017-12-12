
import { ADD_CHIP, REMOVE_CHIP } from '../helpers/constants';

export function chipsReducer(state = [], action) {
  switch (action.type) {
    case ADD_CHIP:
      return [...state, {
        id: action.id,
        city: action.city,
        lat: action.lat,
        lon: action.lon
      }];
    case REMOVE_CHIP:
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)

      ];
    default:
      return state;
  }
  return state;
}
;