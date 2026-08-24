"use client";
import { useEffect, useState } from "react";
export function ErrorDisplay() {
  const [errors, setErrors] = useState<string[]>([]);
  useEffect(() => {
    const handleErr = (e: ErrorEvent) => {
      setErrors(prev => [...prev, e.message + " at " + e.filename + ":" + e.lineno]);
    };
    window.addEventListener("error", handleErr);
    return () => window.removeEventListener("error", handleErr);
  }, []);
  if (errors.length === 0) return null;
  return (
    <div style={{position: 'fixed', top: 0, left: 0, zIndex: 9999, background: 'red', color: 'white', padding: 20, maxHeight: '50vh', overflow: 'auto'}}>
      <h3>Errors:</h3>
      {errors.map((e, i) => <div key={i}>{e}</div>)}
    </div>
  );
}
