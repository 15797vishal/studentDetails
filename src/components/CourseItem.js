// src/components/CourseItem.js
import React from 'react';

function CourseItem({ course }) {
  return (
    <li>
      <a href={`/courses/${course.id}`}>{course.name}</a>
    </li>
  );
}

export default CourseItem;
