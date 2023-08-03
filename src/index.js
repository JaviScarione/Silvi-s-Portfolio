import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import { LangProvider } from './context/langContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
    <App />
  </LangProvider>
);