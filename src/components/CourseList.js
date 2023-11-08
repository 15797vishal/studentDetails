import React, { useState, useEffect } from 'react';
import courseModel from './courseModel';


function CourseList() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('/data.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setCourses(data);
        } else {
          throw new Error('Response is not JSON');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);


  return (
    <div>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <a href={`/courses/${course.id}`}>{course.name}</a> - {course.instructor} -{course.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseList;
