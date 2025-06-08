import React from 'react';

function ClickCounter({ count, increment }) {
  return (
    <button onClick={increment}>Clicked {count} times</button>
  );
}

export default ClickCounter;
