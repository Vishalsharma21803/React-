import React, { useState } from 'react';
import './BMIcalculator.css'; // Import the CSS file

const BMIcalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <label>Height (in cm):</label>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <label>Weight (in kg):</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h2>Your BMI: {bmi.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default BMIcalculator;