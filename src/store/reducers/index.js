import { combineReducers } from "redux";
import { containers } from "./containerReducer";
import { products } from "./productReducer";

export const rootReducer = combineReducers({
  containers,
  products,
});
