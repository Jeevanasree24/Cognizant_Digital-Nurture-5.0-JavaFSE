import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 89 },
    { name: 'Rohit Sharma', score: 65 },
    { name: 'Jasprit Bumrah', score: 45 },
    { name: 'Ravindra Jadeja', score: 72 },
    { name: 'KL Rahul', score: 58 },
    { name: 'Shikhar Dhawan', score: 34 },
    { name: 'Hardik Pandya', score: 77 },
    { name: 'Shreyas Iyer', score: 69 },
    { name: 'Rishabh Pant', score: 82 },
    { name: 'Ishan Kishan', score: 27 },
    { name: 'Mohammed Siraj', score: 55 }
  ];

  // Display all players using map()
  const allPlayers = players.map((p, idx) => (
    <li key={idx}>{p.name} - Score: {p.score}</li>
  ));

  // Use ES6 arrow function to filter players with score below 70
  const belowSeventy = players.filter(p => p.score < 70).map((p, idx) => (
    <li key={idx}>{p.name} - Score: {p.score}</li>
  ));

  return (
    <div style={{ maxWidth: 700, margin: '24px auto', padding: 12 }}>
      <h2>List of Players</h2>
      <h4>All Players</h4>
      <ul>{allPlayers}</ul>

      <h4>Players with score below 70</h4>
      <ul>{belowSeventy}</ul>
    </div>
  );
};

export default ListofPlayers;
