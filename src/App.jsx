import React, { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', score: 85 },
    { id: 2, name: 'Bob Smith', score: 32 },
    { id: 3, name: 'Charlie Davis', score: 45 }
  ]);

  const handleAddStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score
    };
    setStudents([...students, newStudent]);
  };

  const handleUpdateScore = (id, newScore) => {
    // Only allow valid numbers or empty string (while typing)
    if (newScore !== '' && (isNaN(newScore) || newScore < 0)) return;
    
    setStudents(students.map(student => 
      student.id === id ? { ...student, score: newScore === '' ? '' : Number(newScore) } : student
    ));
  };

  return (
    <div className="app-container">
      <div className="glass-panel">
        <Header />
        
        <main className="main-content">
          <section className="add-section">
            <h2>Add New Student</h2>
            <AddStudentForm onAddStudent={handleAddStudent} />
          </section>

          <section className="table-section">
            <h2>Student Roster</h2>
            <StudentTable students={students} onUpdateScore={handleUpdateScore} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
