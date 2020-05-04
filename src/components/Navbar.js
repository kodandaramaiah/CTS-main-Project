import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="banner-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <Link className="navbar-brand" to="/">
                  <i className="fas fa-book text-warning">E-Books</i>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="/navbar"
                  aria-controls="navbars"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbar"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <i className="fas fa-home "></i>Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        <i class="far fa-registered"></i> Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        <i class="fas fa-sign-in-alt"></i>Login
                      </Link>
                    </li>
                    <li className="nav-item dropdown menu-area">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="mega-one"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        catagories
                      </Link>
                      <div
                        className="dropdown-menu mega-area"
                        aria-labelledby="mega-one"
                      >
                        <div className="row text-danger">
                          <div className="col-sm-6 col-lg-3 ">
                            <h5>Romance/Erotica</h5>
                            <Link to="/" className="dropdown-item">
                              Pride and Prejudice by Jane Austen.
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Outlander by Diana Gabaldon
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Jane Eyre by Charlotte Brontë
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Gone with the Wind by Margaret Mitchell.
                            </Link>
                            <Link to="/" className="dropdown-item text-primary">
                              Show more......
                            </Link>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <h5>Crime</h5>
                            <Link to="/" className="dropdown-item">
                              The Girl Beneath the Sea
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Victim Six
                            </Link>
                            <Link to="/" className="dropdown-item">
                              The Missing Sister. Elle Marr.
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Animation Templates
                            </Link>
                            <Link to="/" className="dropdown-item text-primary">
                              Show more.....
                            </Link>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <h5>Religious</h5>
                            <Link to="/" className="dropdown-item">
                              Rig Veda
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Sama Veda.
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Yajur Veda.
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Atharva Veda.
                            </Link>
                            <Link to="/" className="dropdown-item text-primary">
                              Show more......
                            </Link>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <h5>Science Fiction</h5>
                            <Link to="/" className="dropdown-item">
                              Anna Karenina
                            </Link>
                            <Link to="/" className="dropdown-item">
                              To Kill a Mockingbird.
                            </Link>
                            <Link to="/" className="dropdown-item">
                              The Great Gatsby
                            </Link>
                            <Link to="/" className="dropdown-item">
                              A Passage to India. ...
                            </Link>
                            <Link to="/" className="dropdown-item text-primary">
                              Show more......
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown menu-area">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="mega-two"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Accounts
                      </Link>
                      <div
                        className="dropdown-menu mega-area"
                        aria-labelledby="mega-two"
                      >
                        <div className="row">
                          <div className="col-sm-6 col-lg-3">
                            <h5>your Lists</h5>
                            <Link to="/" className="dropdown-item">
                              Create a List
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Find a List or Registry
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Save Items from the Web
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Wedding Registry
                            </Link>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <h5>Your Account</h5>
                            <Link to="/" className="dropdown-item">
                              Your Orders
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Your Recommendations
                            </Link>
                            <Link to="/" className="dropdown-item">
                              Card Templates
                            </Link>
                            <Link to="/" className="dropdown-item">
                              your Subscribe & Save Items
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Cart">
                        Mycart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Cart">
                        <i className="material-icons">shopping_cart</i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
