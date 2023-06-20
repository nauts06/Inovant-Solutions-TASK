import React, { useEffect, useState } from "react";

import { FieldArray, Formik, useFormik, Form } from "formik";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  // let initialValues = {

  // };

  // let setImage = []

  const handleImage = (event) => {
    const preset_key = "hrzxc8tv";
    const cloud_name = "dwgp5uejr";
    console.log("asdfghj", event.target.files[0]);

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        // console.log("responnse", res.data.secure_url);
        // setImage();
        setImage(res.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImage2 = (event) => {
    const preset_key = "gyq8juvu";
    const cloud_name = "dwgp5uejr";
    console.log("asdfghj", event.target.files[0]);

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        // console.log("responnse", res.data.secure_url);
        // setImage();
        setImage2(res.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImage3 = (event) => {
    const preset_key = "h2f3sheq";
    const cloud_name = "dwgp5uejr";
    console.log("asdfghj", event.target.files[0]);

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        // console.log("responnse", res.data.secure_url);
        // setImage();
        setImage3(res.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImage4 = (event) => {
    const preset_key = "swmqmwpy";
    const cloud_name = "dwgp5uejr";
    console.log("asdfghj", event.target.files[0]);

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        // console.log("responnse", res.data.secure_url);
        // setImage();
        setImage4(res.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-neutral h-screen">
      <div className="text-[34px] text-center text-base-100 ">
        Add Products Here
      </div>

      <div className="card w-[90%]  bg-base-100 shadow-xl m-auto">
        <div className="card-body">
          <div className="flex justify-end ">
            <a
              className="btn btn-neutral  w-[10%] justify-end "
              onClick={() => navigate("/signin")}
            >
              Cancel
            </a>
          </div>

          {/* <form onSubmit={formik.handleSubmit}> */}
          <div className="mt-[2%]  text-center">
            <div className="mt-[2%]">
              <Formik
                // enableReinitialize={true}
                // validateOnChange={true}
                initialValues={{
                  name: "",
                  price: "",
                  // addImages: "",
                  addImages: [
                    {
                      images: "",
                    },
                    {
                      images: "",
                    },
                    {
                      images: "",
                    },
                    {
                      images: "",
                    },
                  ],
                }}
                onSubmit={(values) => {
                  // console.log("valuesField", values);

                  const data = {
                    name: values.name,
                    price: values.price,
                    image: values.addImages,
                  };

                  // axios
                  //   .post("http://localhost:5000/user", data)
                  //   .then((response) => {
                  //     console.log("valueskk", response);
                  //     navigate("/");
                  //   })
                  //   .catch((error) => {
                  //     console.log("error", error);
                  //   });
                }}
                render={({
                  setValues,
                  values,
                  errors,
                  touched,
                  handleReset,
                  handleSelect,
                  handleChange,
                  setFieldValue,
                }) => {
                  return (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                          <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            required
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                          />
                        </Grid>

                        <Grid item xs={12} md={3}>
                          <TextField
                            fullWidth
                            required
                            label="Price"
                            variant="outlined"
                            type="number"
                            name="price"
                            onChange={handleChange}
                            value={values.price}
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            type="file"
                            name="addImages"
                            onChange={handleImage}
                            // defaultValue={values.addImages}
                          />
                          <Grid className="mt-4">
                            <TextField
                              type="file"
                              name="addImages"
                              onChange={handleImage2}
                              // defaultValue={values.addImages}
                            />
                          </Grid>
                          <Grid className="mt-4">
                            <TextField
                              type="file"
                              name="addImages"
                              onChange={handleImage3}
                              // defaultValue={values.addImages}
                            />
                          </Grid>
                          <Grid className="mt-4">
                            <TextField
                              type="file"
                              name="addImages"
                              onChange={handleImage4}
                              // defaultValue={values.addImages}
                            />
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <img src={image} alt="" className="w-[30%]" />
                          <img src={image2} alt="" className="w-[30%]  mt-1" />
                          <img src={image3} alt="" className="w-[30%]  mt-1" />
                          <img src={image4} alt="" className="w-[30%]  mt-1" />
                        </Grid>

                        {/* -------------------------------------without fieldarray code till here------------------------------------------------ */}

                        {/* <Grid
                          item
                          xs={12}
                          md={6}
                          style={{ display: "flex", gap: "5%" }}
                        >
                          <label>Add Product Images</label>
                          <FieldArray
                            name="addImages"
                            render={(arrayHelpers) => (
                              <div>
                                {values.addImages &&
                                values.addImages.length > 0 ? (
                                  values.addImages.map((friend, index) => (
                                    <div key={index}>
                                      <TextField
                                        type="file"
                                        name={`addImages.${index}`}
                                        onChange={handleImage}
                                      />
                                     
                                     
                                    </div>
                                  ))
                                ) : (
                                  <button
                                    fullWidth
                                    type="button"
                                    onClick={() => arrayHelpers.push("")}
                                  >
                                   
                                    Add Images
                                  </button>
                                )}
                              </div>
                            )}
                          />
                        </Grid>  */}

                        {/* ------------------------------fieldArray code end here------------------------------------- */}

                        <div mt={2} mb={2} textAlign="center">
                          <h6
                            style={{
                              fontSize: ".8em",
                              color: "red",
                              textAlign: "center",
                              fontWeight: 400,
                              transition: ".2s all",
                            }}
                          >
                            {/* {error} */}
                          </h6>
                        </div>
                        <Grid item xs={12} mt={4} mb={1}>
                          <button
                            className="btn btn-primary"
                            type="submit"
                            fullWidth
                          >
                            Save Information
                          </button>
                        </Grid>
                      </Grid>
                    </Form>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* </form> */}
    </div>
  );
};

export default SignUp;
