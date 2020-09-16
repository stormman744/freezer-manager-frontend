import { combineReducers } from "redux";
import { containers } from "./containerReducer";
import { products } from "./productReducer";
import { units } from "./unitReducer";

export const rootReducer = combineReducers({
  containers,
  products,
  units,
});
