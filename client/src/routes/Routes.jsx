import React from "react";
import { Routes,Route } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import SignUp from "../Components/auth/SignUp";
import SignIn from "../Components/auth/SignIn";

const RoutesL = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="signup/:id" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default RoutesL;
