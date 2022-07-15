import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { Button } from "antd";
import styled from "styled-components";
import { Col, Row } from "antd";
const DashboardStyle = styled.div`
  .ant-btn-primary {
    background-color: violet;
  }
`;
const Dashboard = () => (
  <DashboardStyle>
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
          <li>
            <Link to="/view-product" className="nav-link">
              View Product
            </Link>
          </li>
        </ul>
      </header>
    </div>
  </DashboardStyle>
);

export default Dashboard;
