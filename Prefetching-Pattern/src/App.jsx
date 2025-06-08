// App.jsx
import React, { useEffect, useState, Suspense } from "react";

const PrefetchPage = React.lazy(() => import("./PrefetchPage"));

export default function App() {
  const [loadPrefetch, setLoadPrefetch] = useState(false);

  // Prefetch on hover
  const prefetch = () => {
    import("./PrefetchPage");
  };

  return (
    <div>
      <h1>Prefetch Demo</h1>

      <button
        onMouseEnter={prefetch}
        onClick={() => setLoadPrefetch(true)}
        style={{ marginTop: "2rem" }}
      >
        Hover to Prefetch & Click to Load
      </button>

      <Suspense fallback={<p>Loading...</p>}>
        {loadPrefetch && <PrefetchPage />}
      </Suspense>
    </div>
  );
}
