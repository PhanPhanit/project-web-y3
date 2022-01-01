import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActionProvider} from './context/action_context';
import {UserProvider} from './context/user_context';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ActionProvider>
        <App />
      </ActionProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
