import React from 'react';
import FlightDetails from './FlightDetails';

const UserPage = ({ onLogout }) => {
  return (
    <div style={{ maxWidth: 800, margin: '16px auto', padding: 12 }}>
      <h2>Welcome User</h2>
      <FlightDetails />
      <p>You can now book your tickets.</p>
      <div style={{ marginTop: 12 }}>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserPage;
