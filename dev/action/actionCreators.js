import { v4 } from 'node-uuid';
import { 
    ADD_CHIP, 
    REMOVE_CHIP, 
    LOAD_DATA_REQUEST, 
    LOAD_DATA_SUCCESS, 
    REMOVE_DATA 
    } from '../helpers/constants';

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

export const getData = (payload) => {
  return {
    type: LOAD_DATA_REQUEST,
    payload
  }
}


