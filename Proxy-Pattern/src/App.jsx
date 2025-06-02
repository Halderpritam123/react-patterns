import React, { useState } from "react";

//The Proxy Pattern provides a surrogate or placeholder object for another object, to control access, add extra behavior, or defer operations without changing the original object.



// A simple function that creates a proxy to watch state changes
function createSimpleProxy(state, setState) {
  return new Proxy(state, {
    set(obj, key, value) {
      console.log(`Changed ${key} from ${obj[key]} to ${value}`);
      const updatedState = { ...obj, [key]: value }; // copy and update state
      setState(updatedState); // apply the new state
      return true;
    }
  });
}


export default function App() {
  const [user, setUser] = useState({ name: "Prit", age: 25 });

  const userProxy = createSimpleProxy(user, setUser);

  const changeName = () => {
    userProxy.name = "New Name";
  };

  const increaseAge = () => {
    userProxy.age += 1;
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>Change Name</button>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
