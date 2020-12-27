import React, { useState, useEffect } from "react";

import Container from "../../Container/Container";
import { getAllOrders } from "../../ApiService";

export default function CurrentOrders() {
  const [currentOrder, setcurrentOrder] = useState([]);

  useEffect(() => {
    getAllOrders("pending").then((data) => {
      setcurrentOrder(data);
    });
  }, []);

  return (
    <Container>
      <div className="row mb-2">
        <h2>Current Orders</h2>
      </div>
      <div className="card">
        <div className="card-body p-0">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Customer Number</th>
                <th>Order Value</th>
                <th>Order Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.map(({ orderId, orderType, createdAt, clientId, finalTotal }) => (
                <tr key={orderId}>
                  <td>{String(orderId)}</td>
                  <td>{clientId.name}</td>
                  <td>{clientId.phoneNumber}</td>
                  <td>{finalTotal}</td>
                  <td>{orderType}</td>
                  <td>{new Date(createdAt).toLocaleDateString()}</td>
                  <td className="project-actions text-right">
                    <button className="btn btn-primary btn-sm">
                      <i className="fas fa-folder"> </i>
                      View Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
