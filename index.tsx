import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Index script loaded");

const renderApp = () => {
  console.log("Attempting to render app...");
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Root element not found");
    throw new Error("Could not find root element to mount to");
  }

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("App mounted successfully");
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}