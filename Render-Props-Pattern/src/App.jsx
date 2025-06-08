import React from 'react';
import MouseTracker from './MouseTracker';

function App() {
  return (
    <div style={{display:"flex"}}>
    <MouseTracker
      render={({ x, y }) => (
        <h3>
          Mouse position: ({x}, {y})
        </h3>
      )}
      />
       <MouseTracker
      render={({ x, y }) => (
        <h3>
          Mouse 3 position: ({x}, {y})
        </h3>
      )}
      />
      </div>
  );
}

export default App;
