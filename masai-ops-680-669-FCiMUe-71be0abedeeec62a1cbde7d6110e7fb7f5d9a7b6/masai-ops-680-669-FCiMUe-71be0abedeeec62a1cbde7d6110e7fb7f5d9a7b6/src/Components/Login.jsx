import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthCheck } from '../Redux/AppReducer/action';

export default function Login() {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const hanndleChange = (e) => {
    const { className, value } = e.target;
    setUserData({ ...userData, [className]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthCheck(userData));
  };

  return (
    <div>
      <form className="auth_form" onSubmit={handleSubmit}>
        <input
          onChange={hanndleChange}
          type="name"
          className="name"
          placeholder="Enter Name"
          required
        />
        <br />
        <input
          required
          onChange={hanndleChange}
          type="password"
          className="password"
          placeholder="Enter password"
        />
        <br />
        <input className="submit" type="submit" />
      </form>
      <h3 className="error-container"></h3>
    </div>
  );
}
