import React from 'react';
// factory pattern
const badgeStyleCache = {};

export function getBadgeStyle(type) {
  if (!badgeStyleCache[type]) {
    console.log(`Creating new style for: ${type}`);
    badgeStyleCache[type] = createStyle(type);
  }
  return badgeStyleCache[type];
}

function createStyle(type) {
  const baseStyle = {
    padding: '5px 10px',
    color: 'white',
    borderRadius: '4px',
    fontSize: '14px',
    margin: '4px',
  };

  const typeStyles = {
    success: { backgroundColor: 'green' },
    warning: { backgroundColor: 'orange' },
    error: { backgroundColor: 'red' },
    info: { backgroundColor: 'blue' },
  };

  return { ...baseStyle, ...typeStyles[type] };
}


//“Avoid creating the same object or data over and over — reuse shared stuff.”

//oops used encapsulation,abstraction, memory save and reusability


// Flyweight: style is created once, reused for all buttons

const badges = [
  { label: 'Success', type: 'success' },
  { label: 'Info', type: 'info' },
  { label: 'Warning', type: 'warning' },
  { label: 'Error', type: 'error' },
  { label: 'Info Again', type: 'info' },
];

export default function App() {
  return (
    <div>
      {badges.map((badge, idx) => (
        <span key={idx} style={getBadgeStyle(badge.type)}>
          {badge.label}
        </span>
      ))}
    </div>
  );
}
