import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Container from "../../Container/Container";
import { getAllCustomer, deleteCustomer } from "../../ApiService";

export default function ListCustomer() {
  const history = useHistory();

  const [allCustomer, setallCustomer] = useState([]);

  const getallData = () => {
    getAllCustomer().then(({ data }) => {
      setallCustomer(data.success.data);
    });
  };

  useEffect(() => {
    getallData();
  }, []);

  const editCustomer = (index) => {
    history.push({
      pathname: "/AddCustomer",
      state: allCustomer[index],
    });
  };

  const deleteCustomerr = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const status = confirm("Are you sure");
    if (status === true) {
      deleteCustomer(id).then(() => {
        getallData();
      });
    }
  };
  return (
    <Container>
      <div className="card">
        <div className="card-body p-0">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>User Type</th>
                <th>Phone Number</th>
                <th>Email ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allCustomer.map(
                ({ name, phoneNumber, email, _id, role }, index) => (
                  <tr key={index}>
                    <td>{String(_id).substr(0, 6)}</td>
                    <td>{name}</td>
                    <td>{role}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td
                      style={{
                        display: "flex",
                        "justify-content": "space-around",
                        width: "245px",
                      }}
                    >
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => editCustomer(index)}
                      >
                        <i className="fas fa-folder pr-1"></i>
                        View
                      </button>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => editCustomer(index)}
                      >
                        <i className="fas fa-pencil-alt pr-1"></i>
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteCustomerr(_id)}
                      >
                        <i className="fas fa-trash pr-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
