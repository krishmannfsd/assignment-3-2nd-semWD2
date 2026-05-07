import React from 'react';
import LiveInputForm from '../components/LiveInputForm';

const Home = () => {
  return (
    <div className="page-content">
      <h2>Welcome to the Home Page</h2>
      <p>This page demonstrates the live input form functionality.</p>
      
      <div className="feature-section">
        <LiveInputForm />
      </div>
    </div>
  );
};

export default Home;
