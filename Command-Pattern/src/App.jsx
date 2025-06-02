import React, { useState } from "react";

// The Command Pattern is about extracting the logical or functional part of an action into a separate object or function — so you can reuse it, modify it, undo it, or enhance it later without touching the main component or code that triggers it.

// The OOP concept of encapsulation is used here to encapsulate the logic and main state.

const createIncrementCommand = () => ({
  execute: (state) => state + 1,
  undo: (state) => state - 1,
});

const createDecrementCommand = () => ({
  execute: (state) => state - 1,
  undo: (state) => state + 1,
});

export default function FunctionalCommandCounter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const executeCommand = (command) => {
    const newCount = command.execute(count);
    setCount(newCount);
    setHistory([...history, command]);
    setRedoStack([]);
  };

  const undo = () => {
    if (history.length === 0) return;
    const lastCommand = history[history.length - 1];
    const newCount = lastCommand.undo(count);
    setCount(newCount);
    setHistory(history.slice(0, -1));
    setRedoStack([lastCommand, ...redoStack]);
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const command = redoStack[0];
    const newCount = command.execute(count);
    setCount(newCount);
    setRedoStack(redoStack.slice(1));
    setHistory([...history, command]);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => executeCommand(createIncrementCommand())}>+1</button>
      <button onClick={() => executeCommand(createDecrementCommand())}>-1</button>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
}
