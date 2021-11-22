import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage, Category, Home, Profile, ViewBook, Error } from "./pages";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:menuName" element={<Category />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/viewbook/:id" element={<ViewBook />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
