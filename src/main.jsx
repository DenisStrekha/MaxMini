import React from 'react';
import { createRoot } from 'react-dom/client';
import { MaxUI } from '@maxhub/max-ui';
import App from './App';
import '@maxhub/max-ui/dist/styles.css';
import './styles/global.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <MaxUI>
    <App />
  </MaxUI>
);
