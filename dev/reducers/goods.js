
export function goodsList(state=[], action){
	switch(action.type){
		case 'ADD_PROD':
		return [...state, {
			id: action.id,
			name: action.name,
			red: action.red,
			green: action.green,
			blue: action.blue
		}];
		case 'REMOVE_PROD':
		return [
		...state.slice(0,action.i),
		...state.slice(action.i + 1)

		];
		default:
		return state;
	}
	return state;
};