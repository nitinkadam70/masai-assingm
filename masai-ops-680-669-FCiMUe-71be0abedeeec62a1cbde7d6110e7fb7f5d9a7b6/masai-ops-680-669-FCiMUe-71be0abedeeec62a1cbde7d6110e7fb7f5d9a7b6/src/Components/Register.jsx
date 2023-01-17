import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegisterCall } from '../Redux/AppReducer/action';

export default function Register() {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const hanndleChange = (e) => {
    const { className, value } = e.target;
    setUserData({ ...userData, [className]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegisterCall(userData));
  };
  return (
    <div>
      <form className="auth_form" onSubmit={handleSubmit}>
        <input
          required
          onChange={hanndleChange}
          type="name"
          className="name"
          placeholder="Enter Name"
        />
        <br />
        <input
          required
          onChange={hanndleChange}
          type="text"
          className="location"
          placeholder="Location"
        />
        <br />
        <input
          required
          onChange={hanndleChange}
          type="text"
          className="interests"
          placeholder="What are your interests? Add comma separated values"
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
    </div>
  );
}
