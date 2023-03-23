import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ForgetPassword from './component/Auth/ForgetPassword';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import { Courses } from './component/Courses/Courses';
import Home from './component/Home/Home';
import Footer from './component/Layouts/Footer/Footer';
import Header from './component/Layouts/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
