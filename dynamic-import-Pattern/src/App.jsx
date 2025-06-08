import React, { useState } from 'react';

function App() {
  const [MessageComponent, setMessageComponent] = useState(null);

  const loadComponent = async () => {
    const module = await import('./Message.jsx');
    setMessageComponent(() => module.default);
  };

  return (
    <div>
      <h1>Dynamic Import Example</h1>
      <button onClick={loadComponent}>Load Message</button>

      {MessageComponent && <MessageComponent />}
    </div>
  );
}

export default App;
