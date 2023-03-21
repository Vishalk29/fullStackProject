import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Courses } from './component/Courses/Courses';
import Home from './component/Home/Home';
import Header from './component/Layouts/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
