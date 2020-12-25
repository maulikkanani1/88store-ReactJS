import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function SideBar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a to="/" className="brand-link">
        <img src={Logo} alt="AdminLTE Logo" style={{ width: "inherit" }} />
      </a>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="/orders" className="nav-link">
                <p>
                  Order Management
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="pages/mailbox/mailbox" className="nav-link">
                    <p>Current Orders</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="pages/mailbox/compose" className="nav-link">
                    <p>Dispatch Orders</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="pages/mailbox/read-mail" className="nav-link">
                    <p>Completed Orders</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="AddInventory" className="nav-link">
                <p>Inventory</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="AddCust" className="nav-link">
                <p>User Management</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;
