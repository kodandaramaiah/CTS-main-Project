import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5  p-5  text-white">
            <div className="text-center text-danger">
              <h2>Register</h2>
            </div>
            <form className="mt-4 ">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp "
                  placeholder="Enter Fullname"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter E-mail Address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Re-enter password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-danger btn-block">
                Submit
              </button>
              <div className="text-dark p-2 mr-2">
                Do you have already account?
                <Link
                  to="/login"
                  className="text-decoration-none text-danger ml-4"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Register;
