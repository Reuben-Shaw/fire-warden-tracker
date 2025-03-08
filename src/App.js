import './App.css';
import React, { useState } from 'react';

function App() {
  // States to hold input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`First Name: ${firstName}, Last Name: ${lastName}, Number: ${number}`);
  };

  return (
    <div className="App">
      <h1>Fire Warden Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter Last Name"
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            value={number}
            onChange={handleNumberChange}
            placeholder="Enter a Number"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
