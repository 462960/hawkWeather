
import { REMOVE_CHIP, LOAD_DATA_REQUEST } from '../helpers/constants';

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



