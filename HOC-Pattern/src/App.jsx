import React from 'react';
import ClickCounter from './ClickCounter.jsx';
import WithCounter from './withCounter.jsx';

const EnhancedClickCounter = WithCounter(ClickCounter);

function App() {
  return (
    <div>
      <EnhancedClickCounter />
    </div>
  );
}

export default App;
