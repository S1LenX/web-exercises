import React, { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'inc') return { count: state.count + 1 };
  if (action.type === 'dec') return { count: state.count - 1 };
  return state;
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'inc' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'dec' })}>Decrease</button>
    </div>
  );
}

export default CounterReducer;
