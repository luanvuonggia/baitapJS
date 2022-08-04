import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { Input } from "antd";
import { useRematchDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { PrimaryLayout } from "components/Layout";
const DashboardStyle = styled.div`
  ul {
    li {
      list-style-type: none;
      padding: 0;
      display: inline;
      margin-right: 20px;
    }
  }
  .error-message {
    color: red;
    font-size: 14px;
  }
`;
const Dashboard = () => {
  const userState = useSelector((state) => state.userInfo); // lấy data từ store ra sài

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const { getAvatartAsync, updateFirstName } = useRematchDispatch(
    ({ userInfo }) => ({
      getAvatartAsync: userInfo.getAvatartAsync,
      updateFirstName: userInfo.updateFirstName,
    })
  );

  const onSubmit = async (values) => {
    //await sleep(300);
    //window.alert(JSON.stringify(values, 0, 2));
    updateFirstName(values.firstName);
    // getAvatartAsync(values.firstName);
    localStorage.setItem("isLogin", true);
  };

  const required = (value) => (value ? undefined : "Required");
  const mustBeNumber = (value) =>
    isNaN(value) ? "Must be a number" : undefined;
  const minValue = (min) => (value) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  return (
    <PrimaryLayout>
      <DashboardStyle>Home page</DashboardStyle>
    </PrimaryLayout>
  );
};

export default Dashboard;
