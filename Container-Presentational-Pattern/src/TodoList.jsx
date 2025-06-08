import React from 'react';

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => onToggle(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
