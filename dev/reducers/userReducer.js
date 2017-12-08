

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return action.user;
    case 'DELETE_USER':
      return {};
    default:
      return state;
  }
};