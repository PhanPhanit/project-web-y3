import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CartPage, Category, Home, Profile, ViewBook, Error} from './pages';
import {Navbar, Sidebar, Footer} from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/categories/:menuName">
          <Category />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/viewbook/:id" children={<ViewBook />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
