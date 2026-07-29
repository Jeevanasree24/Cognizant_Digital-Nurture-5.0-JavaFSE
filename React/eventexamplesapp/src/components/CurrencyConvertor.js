import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleConvert = () => {
    const r = parseFloat(rupees);
    if (isNaN(r)) {
      alert('Please enter a valid number for Rupees');
      return;
    }
    const converted = r / 90; // 1 Euro = 90 Rupees
    setEuro(converted.toFixed(2));
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12, borderRadius: 6 }}>
      <h3>Currency Convertor</h3>
      <div style={{ marginBottom: 8 }}>
        <label style={{ marginRight: 8 }}>Indian Rupees:</label>
        <input value={rupees} onChange={e => setRupees(e.target.value)} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <label style={{ marginRight: 8 }}>Euro:</label>
        <input value={euro} readOnly />
      </div>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default CurrencyConvertor;
