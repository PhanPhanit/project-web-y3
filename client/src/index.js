import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActionProvider} from './context/action_context';

ReactDOM.render(
  <React.StrictMode>
    <ActionProvider>
      <App />
    </ActionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
