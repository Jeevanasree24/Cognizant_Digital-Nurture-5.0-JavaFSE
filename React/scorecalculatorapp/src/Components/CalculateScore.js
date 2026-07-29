import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const average = total / goal;

  return (
    <div className="container">
      <h2 className="heading">Student Score Card</h2>
      <p className="paragraph"><strong>Name:</strong> {name}</p>
      <p className="paragraph"><strong>School:</strong> {school}</p>
      <p className="paragraph"><strong>Total Marks:</strong> {total}</p>
      <p className="paragraph"><strong>Goal (Number of Subjects):</strong> {goal}</p>
      <p className="paragraph"><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;
