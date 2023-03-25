import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './component/About/About';
import ForgetPassword from './component/Auth/ForgetPassword';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import ResetPassword from './component/Auth/ResetPassword';
import Contact from './component/Contact/Contact';
import { Courses } from './component/Courses/Courses';
import Home from './component/Home/Home';
import Footer from './component/Layouts/Footer/Footer';
import Header from './component/Layouts/Header/Header';
import Request from './component/Request/Request';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />

        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
