import React from "react";

import Container from "../../Container/Container";

export default function DispatchOrders() {
  return (
    <Container>
      <div className="card">
        <div className="card-body p-0">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Order Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EE001</td>
                <td>
                  <a> customer name 1 </a>
                </td>
                <td>
                  <a> Customer </a>
                </td>
                <td>
                  <a> 9999988888 </a>
                </td>
                <td className="project-actions text-right">
                  <a className="btn btn-primary btn-sm" href="#">
                    <i className="fas fa-folder"> </i>
                    View Order
                  </a>
                </td>
              </tr>
              <tr>
                <td>SP001</td>
                <td>
                  <a> Sales Person name 1 </a>
                </td>
                <td>
                  <a> Sales Person </a>
                </td>
                <td>
                  <a> 9999988888 </a>
                </td>
                <td className="project-actions text-right">
                  <a className="btn btn-primary btn-sm" href="#">
                    <i className="fas fa-folder"> </i>
                    View Order
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
