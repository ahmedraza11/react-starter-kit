import React from 'react';


export const Counter = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Counter {props.counterValue}</h1>
      <button onClick={()=>props.increment_value()}>+</button>
      <button onClick={()=>props.decrement_value()}>-</button>
    </div>
  )
}