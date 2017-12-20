
import { REMOVE_CHIP, LOAD_DATA_REQUEST, SWITCH_FORECAST_LENGTH, SWITCH_TEMP } from '../helpers/constants';

export function removeChip(chips, i) {
  return {
    type: REMOVE_CHIP,
    chips,
    i
  }
}

export const getData = (period, city) => {
  return {
    type: LOAD_DATA_REQUEST,
    period, 
    city
  }
}

export const variantData = (variant) => {
  return {
    type: SWITCH_FORECAST_LENGTH,
    variant
  }
}

export const switchTemp = (temp) => {
	return {
		type: SWITCH_TEMP,
		temp
	}
}



