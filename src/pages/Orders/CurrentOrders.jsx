import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Container from "../../Container/Container";
import { getAllOrders } from "../../ApiService";

export default function CurrentOrders() {
  const [currentOrder, setcurrentOrder] = useState([]);
  const history = useHistory();
  const loaction = useParams();
  const { orderstatus } = loaction;

  useEffect(() => {
    let status = "";
    switch (orderstatus) {
      case "Current":
        status = "pending";
        break;
      case "Dispatch":
        status = "confirm";
        break;
      case "Completed":
        status = "dispatch";
        break;
      default:
        break;
    }
    getAllOrders(status).then((data) => {
      setcurrentOrder(data);
    });
  }, [orderstatus]);

  return (
    <Container>
      <div className="row mb-2">
        <h2>{orderstatus} Orders</h2>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.map(({ orderId, orderType, createdAt, clientId, finalTotal }, index) => (
                <tr key={orderId}>
                  <td>{String(orderId)}</td>
                  <td>{clientId.name}</td>
                  <td>{clientId.phoneNumber}</td>
                  <td>{finalTotal}</td>
                  <td>{orderType}</td>
                  <td>{new Date(createdAt).toLocaleDateString()}</td>
                  <td className="project-actions text-right">
                    <button
                      onClick={() => history.push("/OrderDetails", currentOrder[index])}
                      className="btn btn-primary btn-sm"
                    >
                      <i className="mr-2 fas fa-folder " />
                      /<i className="ml-2 fas fa-pencil-alt" />
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-trash"></i>
                      Delete
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
