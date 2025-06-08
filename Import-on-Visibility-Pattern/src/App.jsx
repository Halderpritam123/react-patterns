import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function App() {
  const [MessageComponent, setMessageComponent] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  // Dynamically load when component comes into view
  React.useEffect(() => {
    if (inView && !MessageComponent) {
      import("./Message.jsx").then((module) => {
        setMessageComponent(() => module.default);
      });
    }
  }, [inView, MessageComponent]);

  return (
    <div>
      <h1>Scroll Down to Load Component</h1>
      <div style={{ height: "100vh" }}></div>

      <div ref={ref}>
        {MessageComponent ? <MessageComponent /> : <p>Loading on visibility...</p>}
      </div>

      <div style={{ height: "100vh" }}></div>
    </div>
  );
}
