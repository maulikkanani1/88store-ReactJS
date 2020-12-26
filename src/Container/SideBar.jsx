import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function SideBar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img src={Logo} alt="88Store Logo" style={{ width: "inherit" }} />
      </Link>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <p>
                  Order Management
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="current.html" className="nav-link">
                    <p>Current Orders</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="dispatch.html" className="nav-link">
                    <p>Dispatch Orders</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="completed.html" className="nav-link">
                    <p>Completed Orders</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <p>
                  Inventory
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/AddInventory" className="nav-link">
                    <p>Add Items</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ListInventory" className="nav-link">
                    <p>Edit Items</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <p>
                  User Management
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item has-treeview">
                  <Link to="#" className="nav-link">
                    <p>
                      Add User
                      <i className="right fas fa-angle-left" />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/AddCust" className="nav-link">
                        <p>Add Customer</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="addstaff.html" className="nav-link">
                        <p>Add Staff</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/ListUsers" className="nav-link">
                    <p>Edit User</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;
