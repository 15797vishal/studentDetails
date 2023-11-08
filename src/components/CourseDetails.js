import React from 'react';
import { useParams } from 'react-router-dom';
import courseModel from './courseModel'; 


function CourseDetails({ match }) {

  const { courseId } = useParams(); 

  const course = courseModel.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div>
      <h2>Course Details</h2>
      <div className='main'><h3 >Course Name: {course.name}</h3></div>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Course Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Pre-requisites: {course.prerequisites.join(', ')}</p>

      <details>
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong> {item.topic}
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default CourseDetails;
