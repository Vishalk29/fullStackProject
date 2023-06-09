import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './component/About/About';
import ForgetPassword from './component/Auth/ForgetPassword';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import ResetPassword from './component/Auth/ResetPassword';
import Contact from './component/Contact/Contact';
import CoursePage from './component/CoursePages/CoursePage';
import { Courses } from './component/Courses/Courses';
import Home from './component/Home/Home';
import Footer from './component/Layouts/Footer/Footer';
import Header from './component/Layouts/Header/Header';
import NotFound from './component/Layouts/Notfound/NotFound';
import PaymentFail from './component/Payment/PaymentFail';
import PaymentSucces from './component/Payment/PaymentSucces';
import Subscribe from './component/Payment/Subscribe';
import Profile from './component/Profile/Profile';
import Request from './component/Request/Request';
import ChangePassword from './component/Profile/ChangePassword';
import UpdateProfile from './component/Profile/UpdateProfile';
import Dashboard from './component/Admin/Dashboard/Dashboard';
import Createcourse from './component/Admin/Createcourse/Createcourse';
import Admincourse from './component/Admin/Admincourses/Admincourse';
import Users from './component/Admin/Users/Users';

function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />

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

        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        {/*Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<Createcourse />} />
        <Route path="/admin/courses" element={<Admincourse />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
