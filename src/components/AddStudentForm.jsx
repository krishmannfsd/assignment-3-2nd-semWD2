import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !score) return;
    
    // Convert score to a number
    const numericScore = Number(score);
    if (isNaN(numericScore) || numericScore < 0) return;

    onAddStudent(name.trim(), numericScore);
    
    // Clear form
    setName('');
    setScore('');
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="student-name">Student Name</label>
        <input
          type="text"
          id="student-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="student-score">Score</label>
        <input
          type="number"
          id="student-score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Enter score"
          min="0"
          max="100"
          required
        />
      </div>
      <button type="submit" className="btn-add">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
