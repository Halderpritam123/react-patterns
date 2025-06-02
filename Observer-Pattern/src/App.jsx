import React, { useState, useEffect } from 'react';
import { countSubject } from './observer';
import LoggerComponent from './LoggerComponent';

//An object (called the Subject) maintains a list of dependents (called Observers) and notifies them automatically of any state changes, usually by calling one of their methods.

//oops used here: encapsulation abstraction and Polymorphism


export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    countSubject.notify(newCount); 
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <LoggerComponent/>
    </div>
  );
}
