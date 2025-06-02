import React, { useState } from 'react';
import { counterModule } from './counterModule';

//Module Pattern is a way to organize code by encapsulating related variables and functions into a single unit (module), exposing only a public API. It helps keep the global namespace clean and provides private and public access control.



export default function App() {
  const [count, setCount] = useState(counterModule.getCount());

  const handleIncrement = () => {
    const newCount = counterModule.increment();
    setCount(newCount);
  };

  const handleDecrement = () => {
    const newCount = counterModule.decrement();
    setCount(newCount);
  };

  return (
    <div>
      <h3>Module Pattern Example</h3>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
