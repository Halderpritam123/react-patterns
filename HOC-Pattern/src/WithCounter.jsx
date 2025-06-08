import React, { useState } from 'react';

function WithCounter(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);

    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={increment}
      />
    );
  };
}

export default WithCounter;
