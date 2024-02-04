import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Contactus = () => {


  let[data,setData]=useState(17)

  let clickme=()=>{
  setData(data++)
  // data=data+1;
  console.log(data)
}
// useEffect(()=>{

// },[0]) 

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    // if (!values.email) {
    //   errors.email = 'Email is required';
    // } else {
    //   errors.email = 'Invalid email address';
    // }

    return errors;
  }



  return (
    <>
      <section className="contact-us-form">
        <h2>Contact Us</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            {/* <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div> */}

            {/* <div>
          <label htmlFor="message">Message:</label>
          <Field as="textarea" id="message" name="message" />
        </div> */}

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </section>
<button onClick={clickme}>Click Me</button>
      <h2>{data}</h2>
    </>
  );
};

export default Contactus;
