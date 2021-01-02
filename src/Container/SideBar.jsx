import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

function SideBar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img style={{ width: "15rem" }} src={Logo} alt="88Store Logo" />
      </Link>

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
              <Link to="#" className="nav-link">
                <p>
                  Order Management
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/Orders/Current" className="nav-link">
                    <p>Current Orders</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Orders/Dispatch" className="nav-link">
                    <p>Dispatch Orders</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Orders/Completed" className="nav-link">
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
                <li className="nav-item">
                  <Link to="/BulkUpload" className="nav-link">
                    <p>Bulk Upload</p>
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
                      <Link to="/AddCustomer" className="nav-link">
                        <p>Add Customer</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/AddStaff" className="nav-link">
                        <p>Add Staff</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/ListCustomer" className="nav-link">
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
