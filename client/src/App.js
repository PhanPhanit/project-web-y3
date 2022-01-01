import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage, Category, Home, Profile, ViewBook, Error, Signup, Signin } from "./pages";
import { Navbar, Sidebar, Footer, Feedback, Checkout } from "./components";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  console.log(window.location.href);
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Sidebar />
      <Feedback />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:menuName" element={<Category />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/viewbook/:id" element={<ViewBook />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
