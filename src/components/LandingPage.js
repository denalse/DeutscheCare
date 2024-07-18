import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LandingPage.css';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/home'); // Navigate to the home page (adjust the path if necessary)
  };
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Hello</h1>
        <p>Your personal task manager</p>
      </div>
      <button className="get-started-button" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};
