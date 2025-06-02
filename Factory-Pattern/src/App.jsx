import React, { useState } from 'react';

//The Factory Pattern is a design pattern that creates objects (or components) without exposing the exact creation logic to the calling code. Here I have implement a main form creation "createFormField" componet where all jsx is handling(encaplulation) nad just need to define metatdata for form access(abstraction)


// The OOP concept of encapsulation and Abstraction is using here to encapsulate the logic and only calling methods for update the state without knowing main logic.

// 🔨 Factory function to return correct input component
function createFormField(field, value, onChange) {
  switch (field.type) {
    case 'text':
      return (
        <label key={field.name}>
          {field.label}
          <input
            type="text"
            name={field.name}
            value={value}
            onChange={onChange}
          />
        </label>
      );
    case 'checkbox':
      return (
        <label key={field.name}>
          <input
            type="checkbox"
            name={field.name}
            checked={value}
            onChange={(e) => onChange({ target: { name: field.name, value: e.target.checked } })}
          />
          {field.label}
        </label>
      );
    case 'select':
      return (
        <label key={field.name}>
          {field.label}
          <select name={field.name} value={value} onChange={onChange}>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>
      );
    default:
      return null;
  }
}

const fields = [
  { type: 'text', label: 'Name', name: 'name' },
  { type: 'checkbox', label: 'Subscribe', name: 'subscribe' },
  { type: 'select', label: 'Country', name: 'country', options: ['India', 'USA'] },
];

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    subscribe: false,
    country: 'India',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form>
      {fields.map((field) =>
        createFormField(field, formData[field.name], handleChange)
      )}
    </form>
  );
}
