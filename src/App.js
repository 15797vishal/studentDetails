import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<CourseList />} />

        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
