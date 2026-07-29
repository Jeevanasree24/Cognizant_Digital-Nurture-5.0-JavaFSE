import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, name: 'React Basics', duration: '4 weeks', trainer: 'Alice' },
    { id: 2, name: 'Advanced React', duration: '6 weeks', trainer: 'Bob' },
    { id: 3, name: 'Fullstack with React', duration: '8 weeks', trainer: 'Carol' }
  ];

  return (
    <div>
      <h2 className="center">Courses</h2>
      <div className="list">
        {courses.map(course => (
          <div className="card" key={course.id}>
            <h3>{course.name}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Trainer:</strong> {course.trainer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
