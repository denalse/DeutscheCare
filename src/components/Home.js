import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <div className="top-box">
        <span><h1>Are you a...</h1></span>
      </div>
      <div className="bottom-boxes">
        <div className="box" onClick={() => handleNavigation('/buddy/task')}>
          <h2>Buddy</h2>
        </div>
        <div className="box" onClick={() => handleNavigation('/user/task')}>
          <h2>User</h2>
        </div>
        <div className="box" onClick={() => handleNavigation('/guest')}>
          <h2>Guest</h2>
        </div>
      </div>
    </div>
  );
};
