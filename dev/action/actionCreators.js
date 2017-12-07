import {v4} from 'node-uuid';
import {
	ADD_CHIP,
	REMOVE_CHIP
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



// Add product
// let id = 0;
// export function addProduct( name, red, green, blue){
// 	return {
// 		type: 'ADD_PROD',
// 		id: id ++,
// 		name,
// 		red,
// 		green,
// 		blue
// 	}
// };

// Remove product
// export function removeProduct(id, i){
// 	return{
// 		type: 'REMOVE_PROD',
// 		id,
// 		i
// 	}
// };