import { useEffect, useState } from "react";
const Mediator = {
  updateTemperature: null
};


//A Mediator is an object that controls communication between multiple components, so they don’t directly talk to each other. So that we can reduce tight coupling, using context api, resux and pub-sub system kind of centralied library is also an example of this.


export default function App() {
  const [fahrenheit, setFahrenheit] = useState("");

  const [celsius, setCelsius] = useState("");

  const handleChange = e => {
    const value = e.target.value;
    setCelsius(value);

    // Call the mediator to notify others
    if (Mediator.updateTemperature) {
      Mediator.updateTemperature(value * 9 / 5 + 32);
    }
  };
  useEffect(() => {
    Mediator.updateTemperature = setFahrenheit;

    return () => {
      Mediator.updateTemperature = null; // clean up
    };
  }, []);
  return (
    <div>
      <div>
        <label>Temperature (°C): </label>
        <input type="number" value={celsius} onChange={handleChange} />
      </div>
      <div>
        <p>
          Temperature (°F): {fahrenheit}
        </p>
      </div>
    </div>
  );
}
