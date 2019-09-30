import { Counter } from "./counter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment_value, decrement_value } from "./counter.action";
export { CounterReducer } from "./counter.reducer";
export * from "./counter.action";

const mapStateToProps = state => ({
  counterValue: state.counter.value
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment_value,
      decrement_value
    },
    dispatch
  );

export let CounterComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
