import React from "react";
import Header from "../Coman/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Bootstrap/Footer";

function About() {
  return (
    <div>
      <Header />
      <h1>This is About Page</h1>
      <ul className="nav bg-dark">
        <li className="nav-item">
          <Link className="nav-link" to="about1">
            About1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about2">
            About2
          </Link>
        </li>
      </ul>

      <Outlet />
      <br />
      <Footer />
    </div>
  );
}

export default About;
