import { LOAD_DATA_ERROR } from "Action/constants";

export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case LOAD_DATA_ERROR:
      return action.failed;
    default:
      return state;
  }
};
