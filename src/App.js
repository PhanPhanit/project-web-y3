import './App.css';
import React from 'react';
import {CartPage, Category, Home, Profile, ViewBook} from './pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      {/* <Route to="/categories">
        <Category />
      </Route> */}
      {/* <Route to="/cart">
        <CartPage />
      </Route> */}
      {/* <Route to="/profile">
        <Profile />
      </Route> */}
      {/* <Route to="/viewbook/:id" children={<ViewBook />}></Route> */}
    </Router>
  );
}


export default App;
