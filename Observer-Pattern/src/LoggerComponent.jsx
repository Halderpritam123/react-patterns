import React, { useEffect } from 'react';
import { countSubject } from './observer';

export default function LoggerComponent() {
  useEffect(() => {
    const logChange = (val) => {
      console.log("Count changed to:", val);
    };

    countSubject.subscribe(logChange);
    return () => countSubject.unsubscribe(logChange);
  }, []);

  return <p>Logging count changes in console...</p>;
}
