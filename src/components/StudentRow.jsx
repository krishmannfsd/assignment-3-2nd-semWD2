import React from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  const isPass = student.score >= 40;

  return (
    <tr className="student-row">
      <td className="student-name">{student.name}</td>
      <td className="student-score">
        <input
          type="number"
          value={student.score}
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
          className="score-input"
          min="0"
          max="100"
        />
      </td>
      <td className="student-status">
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
};

export default StudentRow;
