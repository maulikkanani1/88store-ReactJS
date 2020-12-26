import React from "react";
import Container from "../Container/Container";

export default function ListUsers() {
  return (
    <Container>
      <div className="card">
        <div className="card-body p-0">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: "6%" }}>User ID</th>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "20%" }}>User Type</th>
                <th>Phone Number</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EE001</td>
                <td>
                  <a>customer name 1</a>
                </td>
                <td>
                  <a>Customer</a>
                </td>
                <td>
                  <a>9999988888</a>
                </td>
                <td>
                  <a>customer@gmail.com</a>
                </td>
                <td className="project-actions text-right">
                  <a className="btn btn-primary btn-sm" href="addcust.html">
                    <i className="fas fa-folder"></i>
                    View
                  </a>
                  <a className="btn btn-info btn-sm" href="addcust.html">
                    <i className="fas fa-pencil-alt"></i>
                    Edit
                  </a>
                  <a className="btn btn-danger btn-sm" href="#">
                    <i className="fas fa-trash"></i>
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>SP001</td>
                <td>
                  <a>Sales Person name 1</a>
                </td>
                <td>
                  <a>Sales Person</a>
                </td>
                <td>
                  <a>9999988888</a>
                </td>
                <td>
                  <a>SalesPerson@gmail.com</a>
                </td>
                <td className="project-actions text-right">
                  <a className="btn btn-primary btn-sm" href="addstaff.html">
                    <i className="fas fa-folder"></i>
                    View
                  </a>
                  <a className="btn btn-info btn-sm" href="addstaff.html">
                    <i className="fas fa-pencil-alt"></i>
                    Edit
                  </a>
                  <a className="btn btn-danger btn-sm" href="#">
                    <i className="fas fa-trash"></i>
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
      </div>
    </Container>
  );
}
