
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (!container) {
  console.error("Critical Error: Root container not found in index.html");
} else {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("YANIMATE Application initialized successfully.");
  } catch (error) {
    console.error("Failed to render React application:", error);
  }
}
