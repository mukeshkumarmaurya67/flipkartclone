import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Footer from "../Home Components/Footer";
import Header from "../Home Components/Header";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contactus = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const initialValues = {
    name: "",
    email: "",
    message: "",
    orderno: "",
  };

  const onSubmits = (values) => {
   
    console.log(values.file);
  };

  const validate = (values) => {
    const errors = {};
// console.log(values);
    if (!values.name) {
      errors.name = "name is required";
    }
    if (!values.orderno) {
      errors.orderno = "order number is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    }
    
    if (!values.message) {
      errors.message = "please write your concern here !";
    }
    // if (!values.Phoneno) {
    //   errors.message = "please enter phone number !";
    // }
    return errors;
  };

  const handleChange = (e) => {
    setPhoneNumber(e);
    setValid(validatePhoneNumber(e));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const numPattern = /^\d.*$/;
    return numPattern.test(phoneNumber);
  };
  return (
    <>
      <Header />
      <section className="contact-us-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12">
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







                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmits}
                    validate={validate}
                  >
                    <Form>
                      <div className="row">
                        <div className="col-lg-6 col-sm-12">
                          <div className="form-group">
                            <label for="name">Name:</label>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Enter your name here ..."
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="form-group">
                            <label for="orderno">Order No:</label>
                            <Field
                              type="text"
                              id="orderno"
                              name="orderno"
                              className="form-control"
                              placeholder="Order no "
                            />
                            <ErrorMessage
                              name="orderno"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Enter your mail id ..."
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-12">
                          <div className="form-group drpdown">
                            <label for="">Choose your concern</label>
                            <select name="" id="" className="form-control">
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
                              <option value="other-concern">
                                Other Concern
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="form-group">
                            <label for="Phoneno">Phone Number:</label>
                            <PhoneInput
                              country={"in"}
                              id="Phoneno"
                              value={phoneNumber}
                              name="Phoneno"
                              onChange={handleChange}
                              inputProps={{ required: true }}
                              className="form-control country-flag"
                              placeholder="Enter your phone number ..."
                            />
                            <ErrorMessage
                              name="Phoneno"
                              component="div"
                              className="text-danger"
                            />
                            {!valid && (
                              <p className="text-danger">
                                Please enter a valid number
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="form-group">
                            <label for="file">Choose Your File:</label>
                            <Field
                              type="file"
                              id="file"
                              name="file"
                              className="form-control"
                              placeholder="Select images ..."
                              multiple="true"
                              accept="image/png, image/jpeg"
                            />
                            <ErrorMessage
                              name="file"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group textara">
                            <label for="message">Message:</label>
                            <Field
                              as="textarea"
                              id="message"
                              name="message"
                              className="form-control"
                              placeholder="Write your concern here...."
                            />
                        
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="text-danger"
                            />
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
                    </Form>
                  </Formik>
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

      <Footer />
    </>
  );
};

export default Contactus;
