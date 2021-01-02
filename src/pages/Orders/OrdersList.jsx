import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Container from "../../Container/Container";
import { getAllOrders } from "../../ApiService";

export default function CurrentOrders() {
  const [currentOrder, setcurrentOrder] = useState([]);
  const [filterData, setfilterData] = useState([]);

  const [searchText, setsearchText] = useState("");

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
    status = "complete";
    getAllOrders(status).then((data) => {
      setcurrentOrder(data);
      setfilterData(data);
    });
  }, [orderstatus]);

  const openInvoice = (invoice) => {
    const win = window.open(`http://139.59.46.91:3001/${invoice}`, "_blank");
    win.focus();
  };

  const searchOrder = (SearchValue) => {
    SearchValue = String(SearchValue).toLowerCase();
    if (Boolean(SearchValue)) {
      const filterdOrder = currentOrder.filter(({ orderId }) => String(orderId).toLowerCase().match(SearchValue));
      setcurrentOrder(filterdOrder);
    } else {
      setcurrentOrder(filterData);
    }
  };

  return (
    <Container>
      <nav className="navbar navbar-expand navbar-white navbar-light">
        <div className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              onChange={(e) => {
                setsearchText(e.target.value);
                searchOrder(e.target.value);
              }}
              value={searchText}
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" onClick={() => searchOrder(searchText)}>
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="row mt-2 mb-2">
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
              {currentOrder.map(({ orderId, orderType, createdAt, clientId, finalTotal, invoice }, index) => (
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
                    {invoice && (
                      <button className="btn btn-primary btn-sm" onClick={() => openInvoice(invoice)}>
                        <i className="fas fa-file-invoice"></i>
                      </button>
                    )}
                    <button className="btn btn-danger btn-sm">
                      <i className="mr-1 fas fa-trash"></i>
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
