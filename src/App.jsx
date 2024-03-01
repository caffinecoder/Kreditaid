import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Common/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Otp from "./components/Otp/Otp";
import ContactPage from "./pages/ContactPage";
import CompanyIndex from "./components/CompanyProfile/index/";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/contact" element={<CompanyIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
