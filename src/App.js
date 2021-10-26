import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CartPage, Category, Home, Profile, ViewBook} from './pages';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route to="/categories">
          <Category />
        </Route>
        <Route to="/cart">
          <CartPage />
        </Route>
        <Route to="/profile">
          <Profile />
        </Route>
        <Route to="/viewbook/:id" children={<ViewBook />}></Route>
      </Switch>
    </Router>
  );
}


export default App;
