import React, { useState } from "react";

import Footer from "../Home Components/Footer";
import Header from "../Home Components/Header";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import { ContactFormSchemas } from "../Form Schemas";

const Contactus = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [valid, setValid] = useState(true);

  const initialValues = {
    name: "",
    orderno: "",
    email: "",
    message: "",
    concern: "",
    file: "",
    // Phoneno: "",
  };
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
  } = useFormik({
    initialValues,
    validationSchema: ContactFormSchemas,
    handleChange: true,
    handleBlur: false,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <Header />
      <section className="contact-us-form">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-contents">
                <div className="left-content">
                  <div className="icon-box">
                    {/* <img
                    src={require(`../Images/Icons/customer-support.png`)}
                    alt=""
                    srcset=""
                  /> */}
                  </div>
                  <h3 className="xl-title">Write your concern here ...</h3>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="name">Name:</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name here ..."
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.name && errors.name ? (
                            <p className="form-error">{errors.name}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="orderno">Order No:</label>
                          <input
                            type="text"
                            id="orderno"
                            name="orderno"
                            className="form-control"
                            placeholder="Order no "
                            value={values.orderno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.orderno && errors.orderno ? (
                            <p className="form-error">{errors.orderno}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your mail id ..."
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.email && errors.email ? (
                            <p className="form-error">{errors.email}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-4 col-sm-12">
                        <div className="form-group drpdown">
                          <label for="">Choose your concern</label>
                          <select
                            name="concern"
                            id=""
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.concern}
                          >
                            <option value="">Select here</option>
                            <option value="product-related">
                              Product related
                            </option>
                            <option value="delhivery-related">
                              Delhivery related
                            </option>
                            <option value="return-related">
                              Product return related
                            </option>
                            <option value="other-concern">Other Concern</option>
                          </select>
                          {touched.concern && errors.concern ? (
                            <p className="form-error">{errors.concern}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="Phoneno">Phone Number:</label>
                          <PhoneInput
                            country={"in"}
                            id="Phoneno"
                            // value={phoneNumber}
                            name="Phoneno"
                            className="form-control country-flag"
                            placeholder="Enter your phone number ..."
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // value={values.Phoneno}
                          />
                          {/* {touched.Phoneno && errors.Phoneno ? (
                            <p className="form-error">{errors.Phoneno}</p>
                          ) : null} */}
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label for="file">Choose Your File:</label>
                          <input
                            type="file"
                            id="file"
                            name="file"
                            className="form-control"
                            placeholder="Select images ..."
                            multiple="true"
                            accept="image/png, image/jpeg"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.file}
                          />
                          {touched.file && errors.file ? (
                            <p className="form-error">{errors.file}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group textara">
                          <label for="message">Message:</label>
                          <input
                            as="textarea"
                            id="message"
                            name="message"
                            className="form-control"
                            placeholder="Write your concern here...."
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.message && errors.message ? (
                            <p className="form-error">{errors.message}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <button
                        type="submit"
                        className="form-control mt-4 btn-red"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="right-content">
                  {/* <h2 className="title">Contact Us</h2> */}
                  <div className="inner-contents">
                    <h3>Contact Information</h3>
                    <p className="address">
                      B707 Ais Technolabs 7th Floor mondeal square Ahmedabad
                      Gujrat 380051
                    </p>
                    <p className="callus">Call Us : +91-7019138442</p>
                    <p className="desc">
                      We are open from Monday - Friday 08:00 am - 08:00 pm
                    </p>
                    <h3 className="chnl">Others Channel</h3>
                    <div className="channel-type">
                      <a href="tel:+91-7019138442">Call-us</a>
                      <a href="mailto:mukeshkumarmaurya70@gmail.com">
                        Email-us
                      </a>
                      <a href="javascript:void(0)">Get-callback</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Contactus;
