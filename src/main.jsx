import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

// Components
import App from './App.jsx';
import NotFound from './components/ui/NotFound.jsx'; // Make sure this path matches where you saved it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Your main portfolio loads on the root path */}
        <Route path="/" element={<App />} />
        
        {/* Any other random URL will trigger the Kernel Panic 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);