import React, { useState } from "react";
import { createField } from "./prototypeTemplates";

//Allows you to create new objects by cloning existing ones, rather than creating from scratch (e.g., using new or a factory).

//oops used; encaplucation, inheritance,abstraction


export default function App() {
  const [fields, setFields] = useState([]);

  const addTextField = () => {
    const newField = createField({ label: "Name", type: "text" });
    setFields([...fields, newField]);
  };

  const addCheckbox = () => {
    const newField = createField({ label: "Accept Terms", type: "checkbox" });
    setFields([...fields, newField]);
  };

  return (
    <div>
      <h3>Dynamic Form Builder</h3>
      <button onClick={addTextField}>Add Text Field</button>
      <button onClick={addCheckbox}>Add Checkbox</button>

      <ul>
        {fields.map((f, i) => (
          <li key={i}>
            {f.label} ({f.type}) {f.required ? "*" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
