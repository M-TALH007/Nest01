import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const isAuthenticated = () => {
    // Implement your authentication logic here
    const token = localStorage.getItem('user');
    return !!token; // Returns true if token exists, false otherwise
  };

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    // Implement logout logic here (clear token, redirect to login page, etc.)
    localStorage.removeItem('user');
    // Redirect to the login page or any other desired page
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          User Management
        </NavLink>
        <div className="nav-menu-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            {isAuthenticated() && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/detail"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  User Details
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink
                exact
                to="/Dashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                DashBoard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-actions">
          <ul className="nav-menu">
            {!isAuthenticated() ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/Login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/Register"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <span className="nav-links" onClick={handleLogout}>
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <HamburgetMenuOpen />
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuClose />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
