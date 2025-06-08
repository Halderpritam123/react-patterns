// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

export default function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: 10 }}>Dashboard</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
