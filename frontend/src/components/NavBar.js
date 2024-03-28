import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]))
      const userId = tokenPayload.id;
      fetch(`http://localhost:4000/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        return response.json();
      })
      .then((userData) => {
        if (userData) {
          setAuthenticated(true);
          setIsAdmin(userData.role === "admin");
        } else {
          setAuthenticated(false);
          setIsAdmin(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
    } else {
      setAuthenticated(false);
      setIsAdmin(false);
    }
  }, []);
  

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
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
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            {authenticated && (
              <>
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
                {isAdmin && (
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/Dashboard"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
        <div className="nav-actions">
          <ul className="nav-menu">
            {!authenticated ? (
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
              <HamburgetMenuClose />
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuOpen />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
