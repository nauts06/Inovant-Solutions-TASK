import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const HomePage = () => {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        console.log("response", response);
        setListing(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="bg-gray-400 h-screen">
      {/* -------------------------navbar starts here--------------------- */}
      <div>
        <Navbar />
      </div>
      {/* -------------------------navbar end here--------------------- */}

      <div
      
      >
        {listing.map((elem) => {
          return (
            <div className="w-[90%] mt-4  m-auto">
              <div className="card card-side bg-base-100 shadow-xl ">
                <figure>
                  <img src={elem?.addImages} alt="Movie" />
                </figure>
                <figure>
                  <img src={elem?.addImages} alt="Movie" />
                </figure>
                <figure>
                  <img src={elem?.addImages} alt="Movie" />
                </figure>
                <figure>
                  <img src={elem?.addImages} alt="Movie" />
                </figure>
                <div className="card-body">
                  <div className="card-actions grid gap-2 grid-cols-2">
                    <button className="btn btn-sm btn-neutral">Edit</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </div>
                  <h2 className="card-title">{elem?.name}</h2>
                  {/* <p>Click the button to watch on Jetflix app.</p> */}
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">₹ {elem?.price}</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
