import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" href="#" role="button">
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="index.html" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="orders.html" className="nav-link">
            Order Management
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="#" className="nav-link">
            Inventory
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="#" className="nav-link">
            User Management
          </Link>
        </li>
      </ul>
      {/* SEARCH FORM */}
      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ml-auto">{/* Notifications Dropdown Menu */}</ul>
    </nav>
  );
}

export default NavBar;
