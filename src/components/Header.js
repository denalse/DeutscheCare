import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import '../style/Header.css';

export const Header = () => {
  return (
    <header>
      <span className="logo">
      <img src={logo} alt='logo'/>
        <Link to = "/" className="logo"><span>DeutscheCare+</span></Link>
      </span>
        <div className="top-nav">
          <Link to="user/task" className="nav-button"> Task </Link>
          <Link to="/user/profile" className="nav-button"> Profile </Link>
        </div>
    </header>
  );
};
