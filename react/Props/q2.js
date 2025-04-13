import React from 'react';
import Child from './q1';

function Parent() {
  const msg = "Hello from the Parent component!";
  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={msg} />
    </div>
  );
}

export default Parent;
