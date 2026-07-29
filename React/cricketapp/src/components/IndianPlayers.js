import React from 'react';

const IndianPlayers = () => {
  const names = [
    'Player1','Player2','Player3','Player4','Player5','Player6','Player7','Player8','Player9','Player10','Player11'
  ];

  // Destructure into individual variables then group odd/even using those variables
  const [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11] = names;
  const oddTeam = [p1,p3,p5,p7,p9,p11];
  const evenTeam = [p2,p4,p6,p8,p10];

  // Create two arrays and merge using spread operator
  const T20Players = ['T20_A','T20_B','T20_C'];
  const RanjiTrophyPlayers = ['Ranji_X','Ranji_Y','Ranji_Z'];
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div style={{ maxWidth: 700, margin: '24px auto', padding: 12 }}>
      <h2>Indian Players</h2>

      <h4>Odd Team Players</h4>
      <ul>
        {oddTeam.map((n, i) => <li key={i}>{n}</li>)}
      </ul>

      <h4>Even Team Players</h4>
      <ul>
        {evenTeam.map((n, i) => <li key={i}>{n}</li>)}
      </ul>

      <h4>Merged Players (T20 + Ranji)</h4>
      <ul>
        {mergedPlayers.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
