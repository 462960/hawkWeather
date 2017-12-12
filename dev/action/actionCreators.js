//import { v4 } from 'node-uuid';
import { ADD_CHIP, REMOVE_CHIP, LOAD_DATA_REQUEST } from '../helpers/constants';

// export function addChip(city, lat, lon) {
//   return {
//     type: ADD_CHIP,
//     id: v4(),
//     city,
//     lat,
//     lon
//   }
// }

export function removeChip(chips, i) {
  return {
    type: REMOVE_CHIP,
    chips,
    i
  }
}

export const getData = (payload) => {
  return {
    type: LOAD_DATA_REQUEST,
    payload
  }
}



