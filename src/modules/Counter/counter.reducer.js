import { DECREMENT, INCREMENT } from "./counter.action";

const InitialState = {
  value: 0
};

export function CounterReducer(state = InitialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
