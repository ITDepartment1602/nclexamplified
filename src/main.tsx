import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import { isLiteDevice } from './lib/device';
import './index.css'

if (isLiteDevice) document.documentElement.classList.add('lite');

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
