import React, { useState } from 'react';

const LiveInputForm = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="live-input-container">
      <h3>Live Input Form</h3>
      <div className="form-group">
        <label htmlFor="nameInput">Enter your name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleChange}
          placeholder="Type your name here..."
          autoComplete="off"
        />
      </div>
      
      <div className="live-output">
        <span className="output-label">Hello,</span>
        <span className="output-text">{name ? name : "Stranger"}</span>
      </div>
    </div>
  );
};

export default LiveInputForm;
