import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { Input } from "antd";
import { useRematchDispatch } from "../../hooks";
import { useSelector } from "react-redux";
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
    <DashboardStyle>
      <div className="App">
        <header className="App-header">
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

          <h1 id="hiiiii">1st name:{userState?.firstName}</h1>

          <div className="info-form">
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="firstName" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <Input
                          {...input}
                          type="text"
                          placeholder="First Name"
                        />
                        {meta.error && meta.touched && (
                          <span className="error-message">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ input, meta }) => (
                      <div>
                        <Input {...input} type="text" placeholder="Last Name" />
                        {meta.error && meta.touched && (
                          <span className="error-message">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="age"
                    validate={composeValidators(
                      required,
                      mustBeNumber,
                      minValue(18)
                    )}
                  >
                    {({ input, meta }) => (
                      <div>
                        <Input {...input} type="text" placeholder="Age" />
                        {meta.error && meta.touched && (
                          <span className="error-message">{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <div className="buttons">
                    <button type="submit" disabled={submitting}>
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </header>
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;
