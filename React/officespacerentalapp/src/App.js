import React from "react";
import "./App.css";

function App() {
  // Online office image
  const officeImage =
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000";

  // Office object list
  const offices = [
    {
      id: 1,
      name: "Tech Park",
      rent: 55000,
      address: "Chennai",
    },
    {
      id: 2,
      name: "Business Hub",
      rent: 75000,
      address: "Bengaluru",
    },
    {
      id: 3,
      name: "Startup Space",
      rent: 45000,
      address: "Hyderabad",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Office Space Rental App</h1>

      {/* Office Image */}
      <img
        src={officeImage}
        alt="Office Space"
        style={{
          width: "700px",
          height: "300px",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />

      {/* Display Office Details */}
      {offices.map((office) => (
        <div
          key={office.id}
          style={{
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
            width: "700px",
          }}
        >
          <h2>{office.name}</h2>

          <p>
            <b>Rent: </b>
            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              {office.rent}
            </span>
          </p>

          <p>
            <b>Address: </b>
            {office.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;