import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const redirect = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("Uid")) {
      redirect("/login");
    }
  });

  const logout = () => {
    localStorage.removeItem("Uid");
    localStorage.removeItem("Uname");
    redirect("/login");
    toast.success("user logout successfully...!");
  };

  return (
    <div>
      <div>
        {/* Topbar Start */}
        <div className="container-fluid py-2 d-none d-lg-flex">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div>
                <small className="me-3">
                  <i className="fa fa-map-marker-alt me-2" />
                  123 Street, New York, USA
                </small>
                <small className="me-3">
                  <i className="fa fa-clock me-2" />
                  Mon-Sat 09am-5pm, Sun Closed
                </small>
              </div>
              <nav className="breadcrumb mb-0">
                <a className="breadcrumb-item small text-body" href="#">
                  Career
                </a>
                <a className="breadcrumb-item small text-body" href="#">
                  Support
                </a>
                <a className="breadcrumb-item small text-body" href="#">
                  Terms
                </a>
                <a className="breadcrumb-item small text-body" href="#">
                  FAQs
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Brand Start */}
        <div className="container-fluid bg-primary text-white pt-4 pb-5 d-none d-lg-flex">
          <div className="container pb-2">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <i className="bi bi-telephone-inbound fs-2" />
                <div className="ms-3">
                  <h5 className="text-white mb-0">Call Now</h5>
                  <span>+012 345 6789</span>
                </div>
              </div>
              <a href="index.html" className="h1 text-white mb-0">
                Lab<span className="text-dark">sky</span>
              </a>
              <div className="d-flex">
                <i className="bi bi-envelope fs-2" />
                <div className="ms-3">
                  <h5 className="text-white mb-0">Mail Now</h5>
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Brand End */}
        {/* Navbar Start */}
        <div className="container-fluid sticky-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-lg-0 px-lg-3">
              <a href="index.html" className="navbar-brand d-lg-none">
                <h1 className="text-primary m-0">
                  Lab<span className="text-dark">sky</span>
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler me-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                  <NavLink to="/" className="nav-item nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/about" className="nav-item nav-link">
                    About
                  </NavLink>
                  <NavLink to="/services" className="nav-item nav-link">
                    Services
                  </NavLink>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu bg-light m-0">
                      <NavLink to="/features" className="dropdown-item">
                        Features
                      </NavLink>
                      <NavLink to="/team" className="dropdown-item">
                        Our Team
                      </NavLink>
                      <NavLink to="/testimonial" className="dropdown-item">
                        Testimonial
                      </NavLink>
                      <NavLink to="/appoinment" className="dropdown-item">
                        Appoinment
                      </NavLink>
                    </div>
                  </div>
                  <NavLink to="/contact" className="nav-item nav-link">
                    Contact
                  </NavLink>
                  <NavLink to="/blog" className="nav-item nav-link">
                    Blogs
                  </NavLink>
                  {(() => {
                    if (localStorage.getItem("Uid")) {
                      return (
                        <NavLink to="/edit" className="nav-item nav-link">
                          Hello {localStorage.getItem("Uname")}
                        </NavLink>
                      );
                    }
                  })()}
                </div>

                <div className="ms-auto d-none d-lg-flex">
                  <a className="btn btn-sm-square btn-primary ms-2" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-sm-square btn-primary ms-2" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-sm-square btn-primary ms-2" href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-sm-square btn-primary ms-2" href>
                    <i className="fab fa-youtube" />
                  </a>
                </div>
                {(() => {
                  if (localStorage.getItem("Uid")) {
                    return (
                      <button onClick={logout} className="btn btn-danger mx-3">
                        Logout
                      </button>
                    );
                  }
                })()}
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </div>
    </div>
  );
};

export default Header;
