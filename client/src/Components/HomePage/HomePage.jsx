import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      {/* -------------------------navbar starts here--------------------- */}

      <Navbar />

      {/* -------------------------navbar end here--------------------- */}

      <h1>This is the home page</h1>
      <Link to="singup">
        <button className="btn btn-neutral">Sing-Up</button>
      </Link>
      <Link to="signin">
        <button className="btn btn-neutral">Sing-In</button>
      </Link>
    </div>
  );
};

export default HomePage;
