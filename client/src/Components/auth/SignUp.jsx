import React, { useEffect, useState } from "react";

import { Formik, useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {

  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      mobileNo: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("asdfghjk", values);


      const data ={
        email:values.email,
        mobileNo:values.mobileNo,
        password:values.password,
        username:values.username,
        role:"user"
      }
      axios
        .post("http://localhost:5000/api/users/register", data)
        .then((response) => {
          console.log("valueskk", response);
          navigate("/signin")
          // getAllData();
          // formik.setValues("")
          // formik.handleReset();
        })
        .catch((error) => {
          console.log("error", error);
        });

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
      <div className="text-[34px] text-center mt-[4%]">Sign Up</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-[2%]  text-center">
          <div className="grid grid-cols-1 gap-4  sm:w-[30%] w-[70%] m-auto mt-[2%]">
            <TextField
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <TextField
              type="number"
              name="mobileNo"
              placeholder="Enter Mobile No"
              onChange={formik.handleChange}
              value={formik.values.mobileNo}
            />
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

           
              <a className="btn btn-neutral" onClick={()=>navigate("/signin")}>already registred click here</a>
          
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
