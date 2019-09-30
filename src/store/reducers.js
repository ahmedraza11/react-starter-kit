import { combineReducers } from "redux";
import { CounterReducer } from "./../modules";

export const rootInitialState = {};

const initialState = {
  value: 0
};

export let rootReducer = combineReducers({
  counter: CounterReducer
});
