import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
const Dashboard = () => (
  <div className="Dashboard">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </header>
    </div>
  </div>
);

export default Dashboard;
