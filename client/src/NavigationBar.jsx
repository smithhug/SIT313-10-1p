import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "./utils/authstate";
import './NavigationBar.css';

function NavigationBar() {

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="navbar">
      <p className="header">DevLink Marketplace</p>
      <div className="link-container">
        <Link className="link" to="/PostJob">
          Find Dev
        </Link>
        <Link className="link" to="/">
          Find Jobs
        </Link>
        {user ? (
          // Display "Log Out" and call handleLogout when clicked if the user is logged in
          <button className="link" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          // Display "Login" and "Signup" if the user is not logged in
          <>
            <Link className="link" to="/login">
              Login
            </Link>
            <Link className="link" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
