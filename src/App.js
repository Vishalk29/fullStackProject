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
import NotFound from './component/Layouts/Notfound/NotFound';
import PaymentFail from './component/Payment/PaymentFail';
import PaymentSucces from './component/Payment/PaymentSucces';
import Subscribe from './component/Payment/Subscribe';
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
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentSucces />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/pagenotfound" element={<NotFound />} />

        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
