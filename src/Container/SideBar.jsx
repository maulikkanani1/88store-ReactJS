import React from "react";
import Logo from '../assets/images/logo.png';

function SideBar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index.html" className="brand-link">
        <img src={Logo} alt="AdminLTE Logo" style={{ width: "inherit" }} />
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        {/* Sidebar Menu */}
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
              <a href="index.html" className="nav-link">
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="orders.html" className="nav-link">
                <p>
                  Order Management
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/mailbox/mailbox.html" className="nav-link">
                    <p>Current Orders</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/mailbox/compose.html" className="nav-link">
                    <p>Dispatch Orders</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/mailbox/read-mail.html" className="nav-link">
                    <p>Completed Orders</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="pages/gallery.html" className="nav-link">
                <p>Inventory</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/gallery.html" className="nav-link">
                <p>User Management</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
    </aside>
  );
}

export default SideBar;
