import React, { useState } from 'react';

export default function Login() {
  const [userData, setUserData] = useState({});

  const hanndleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
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
