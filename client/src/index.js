import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ActionProvider} from './context/action_context';
import {UserProvider} from './context/user_context';
import {CategoryProvider} from './context/category_context';
import {ProductProvider} from './context/product_context';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ActionProvider>
        <CategoryProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CategoryProvider>
      </ActionProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
