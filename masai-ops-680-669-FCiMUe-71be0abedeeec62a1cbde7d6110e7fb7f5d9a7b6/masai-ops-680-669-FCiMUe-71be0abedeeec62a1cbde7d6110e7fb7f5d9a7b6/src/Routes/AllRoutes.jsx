import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Auth needed */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
