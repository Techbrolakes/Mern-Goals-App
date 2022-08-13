import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="heading">
        <h1>
          <aSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your Email"
              className="form-control"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              className="form-control"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block" y>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;