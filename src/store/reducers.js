import { combineReducers } from "redux";

export const rootInitialState = {
};

const AppReducer = (state = {name: "Ahmed"}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};


const initialState = {
  value: 0,
};

function addReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREASE':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

export let rootReducer = combineReducers({
  addReducer
});
