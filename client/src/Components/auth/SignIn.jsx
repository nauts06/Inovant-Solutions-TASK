import React, { useEffect, useState } from "react";

import { Formik, useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log("asdfghjk", values);

      axios
        .post("http://localhost:5000/api/users/login", values)
        .then((response) => {
          console.log("responsell", response);
          // getAllData();
          // formik.setValues("")
          // formik.handleReset();
        })
        .catch((error) => {
          console.log("error", error);
        });

      // axios
      //   .post("http://localhost:5000/api/users/register", values)
      //   .then((response) => {

      //     console.log("valueskk",response);
      //     // getAllData();
      //     // formik.setValues("")
      //     // formik.handleReset();
      //   })
      //   .catch((error) => {
      //     console.log("error", error);
      //   });

      //   if (toggle === true) {
      //     axios
      //       .patch(`http://localhost:5000/api/update/${editId}`, values)
      //       .then((response) => {
      //         getAllData();
      //         setToggle(false);
      //         formik.handleReset();
      //       })
      //       .catch((error) => {
      //         console.log("error", error);
      //       });
      //   } else {
      //     axios
      //       .post("http://localhost:5000/api/post", values)
      //       .then((response) => {
      //         getAllData();
      //         // formik.setValues("")
      //         formik.handleReset();
      //       })
      //       .catch((error) => {
      //         console.log("error", error);
      //       });
      //   }
      console.log("values", values);
    },
  });
  return (
    <div>
      <div className="text-[34px] text-center mt-[4%]">Sign In</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-[2%]  text-center">
          <div className="grid grid-cols-1 gap-4  sm:w-[30%] w-[70%] m-auto mt-[2%]">
            <TextField
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <TextField
              type="text"
              name="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>

            <a className="btn btn-neutral" onClick={() => navigate("/signup")}>
              {" "}
              click here for register
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
