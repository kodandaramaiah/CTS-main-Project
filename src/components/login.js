import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 mt-5  p-5">
            <form className="text-white">
              <h2 className="text-center text-danger">Login page</h2>
              <div className="form-group">
                <label for="exampleInputEmail1">
                  <h6>
                    <b>Username</b>
                  </h6>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="enter username"
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">
                  <h6>
                    <b>password</b>
                  </h6>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="enter password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-danger btn-block mt-4">
                Submit
              </button>
              <div className="text-center pt-4 text-dark">
                Don't have account?
                <Link
                  to="/register"
                  className="text-decoration-none text-warning"
                >
                  Register
                </Link>
              </div>
              <div className="p-4">
                <div className="float-left ">
                  <Link href="#" className="text-dark text-decoration-none">
                    Forget Username
                  </Link>
                </div>
                <div className="float-right ">
                  <Link href="#" className="text-dark text-decoration-none">
                    Forget Password
                  </Link>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default Login;
