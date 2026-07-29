import React from 'react';
import FlightDetails from './FlightDetails';

const GuestPage = ({ onLogin }) => {
  return (
    <div style={{ maxWidth: 800, margin: '16px auto', padding: 12 }}>
      <h2>Welcome Guest</h2>
      <FlightDetails />
      <div style={{ marginTop: 12 }}>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
};

export default GuestPage;
