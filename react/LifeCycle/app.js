import React, { useState } from 'react';
import LifecycleDemo from './q1';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <h1>React Lifecycle Demo</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount Component' : 'Mount Component'}
      </button>
      {showComponent && <LifecycleDemo />}
    </div>
  );
}

export default App;
