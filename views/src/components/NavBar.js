import React from "react";

import { Link } from "react-router-dom";

import "./NavBar.css";

// import Home from '../pages/Home/Home';

function NavBar() {
  const MenuItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Contact",
      path: "/contact",
    },

    {
      id: 4,
      title: "Login",
      path: "/login",
    },
    {
      id: 5,
      title: "Signup",
      path: "/signup",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-md  bg-dark text-white">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse navbar-coll"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {MenuItems.map((item, index) => {
                return (
                  <li className="nav-item" key={item.id}>
                    <Link
                      className="nav-link active text-white"
                      aria-current="page"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
