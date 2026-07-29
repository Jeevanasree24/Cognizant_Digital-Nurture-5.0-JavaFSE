import React from 'react';

const FlightDetails = () => {
  const flights = [
    { id: 1, name: 'Air India 101', source: 'Chennai', destination: 'Bengaluru', fare: 3500 },
    { id: 2, name: 'SpiceJet 202', source: 'Mumbai', destination: 'Delhi', fare: 4200 },
    { id: 3, name: 'IndiGo 303', source: 'Hyderabad', destination: 'Kolkata', fare: 4800 }
  ];

  return (
    <div>
      <h4>Available Flights</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Flight Name</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Source</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Destination</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Fare</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td style={{ border: '1px solid #eee', padding: 8 }}>{f.name}</td>
              <td style={{ border: '1px solid #eee', padding: 8 }}>{f.source}</td>
              <td style={{ border: '1px solid #eee', padding: 8 }}>{f.destination}</td>
              <td style={{ border: '1px solid #eee', padding: 8 }}>{f.fare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightDetails;
