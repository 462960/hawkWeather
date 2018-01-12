import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { chipsReducer } from "./chipsReducer";
import { errorReducer } from "./errorReducer";
import { switchReducer } from "./switchReducer";
import { tempReducer } from "./tempReducer";

export const rootReducer = combineReducers({
  chipsReducer,
  dataReducer,
  errorReducer,
  switchReducer,
  tempReducer
});
