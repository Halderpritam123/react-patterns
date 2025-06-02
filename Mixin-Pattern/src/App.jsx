import React from 'react';
import { useCounter } from './useCounter';

//oops used Object Composition, encapsulation, reusability

//Mixin Pattern means sharing reusable behavior (methods/properties) between multiple objects/components without using inheritance.

/*
Important Note about React & Mixins:
Mixins were popular in React Class Components but are not recommended now with functional components.

Today, custom hooks are the modern alternative for sharing logic in React functional components.
*/


export default function App() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h3>Custom Hook (Modern Mixin Alternative)</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}