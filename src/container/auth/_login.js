import React from "react";
import { Formik } from "formik";

export const Login = ({ googlePlusAuth }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="text-progress">Self-Scrum</h4>
      </div>
      <div className="card-body">
        <Formik
          initialValues={{
            email: "veerareddy.obula@gmail.com",
            password: "Hemitha@168",
          }}
          validate={(values) => {
            console.log("--== validate ", values);
            const errors = {};
            if (!values.email) {
              errors.email = "please enter your gmail address";
            } else if (!/^[A-Z0-9._%+-]+@gmail.com$/i.test(values.email)) {
              errors.email = "please enter valid gmail address";
            }

            if (!values.password) {
              errors.password = "please enter your gmail password";
            }
            return errors;
          }}
        >
          {({
            values,
            initialValues,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <React.Fragment>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please enter your gmail address
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  name="rememberMe"
                  value={values.rememberMe}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => isValid && googlePlusAuth(values)}
                disabled={!isValid || !dirty}
              >
                Submit
              </button>
            </React.Fragment>
          )}
        </Formik>
      </div>
    </div>
  );
};
