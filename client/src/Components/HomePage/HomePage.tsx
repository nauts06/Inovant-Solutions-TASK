import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [listing, setListing] = useState<any[]>([]);
  const [editData, setEditData] = useState({});

  const getAllData = () => {
    axios
      .get("http://localhost:9000/api/getAll")
      .then((response) => {
        console.log("response", response);
        setListing(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const deleteListItem = (id: any) => {
    axios
      .delete(`http://localhost:9000/api/delete/${id}`)
      .then((response) => {
        getAllData();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="bg-gray-400 h-screen">
      {/* -------------------------navbar starts here--------------------- */}
      <div>
        <Navbar />
      </div>
      {/* -------------------------navbar end here--------------------- */}

      <div>
        {listing.map((elem) => {
          return (
            <div className="w-[90%] mt-4  m-auto">
              <div className="card card-side bg-base-100 shadow-xl ">
                <div className="w-[80%] grid grid-cols-4 gap-4">
                  <div>
                    <img
                      src={elem?.addImages1}
                      alt="Movie"
                      className="ml-2 py-6"
                    />
                  </div>
                  <div>
                    <img src={elem?.addImages2} alt="Movie" className="py-6" />
                  </div>
                  <div>
                    <img src={elem?.addImages3} alt="Movie" className="py-6" />
                  </div>
                  <div>
                    <img src={elem?.addImages4} alt="Movie" className="py-6" />
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-actions grid gap-2 grid-cols-2">
                    <button
                      className="btn btn-sm btn-neutral"
                      onClick={() => navigate(`/signup/${elem?._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => deleteListItem(elem?._id)}
                    >
                      Delete
                    </button>
                  </div>
                  <h2 className="card-title">{elem?.name}</h2>

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
