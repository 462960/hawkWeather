// Add product
let id = 0;
export function addProduct( name, red, green, blue){
	return {
		type: 'ADD_PROD',
		id: id ++,
		name,
		red,
		green,
		blue
	}
};

// Remove product
export function removeProduct(id, i){
	return{
		type: 'REMOVE_PROD',
		id,
		i
	}
};