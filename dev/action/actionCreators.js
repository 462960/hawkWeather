import { v4 } from 'node-uuid';
import { ADD_CHIP, REMOVE_CHIP } from '../helpers/constants';

export function addChip(city) {
  return {
    type: ADD_CHIP,
    id: v4(),
    city
  }
}

export function removeChip(chips, i) {
  return {
    type: REMOVE_CHIP,
    chips,
    i
  }
}

export const getUserDetails = (payload) => {
  return {
    type: 'LOAD_USER_REQUEST',
    payload
  }
}

// Get city coordinates
// const function getCityDetails(payload){
//   return {
//     type: 'LOAD_CITY_REQUEST',
//     payload
//   }
// }