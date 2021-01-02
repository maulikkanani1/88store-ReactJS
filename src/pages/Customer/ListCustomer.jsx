import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Container from "../../Container/Container";
import { getAllCustomer, deleteCustomer, deleteStaff, getAllStaff } from "../../ApiService";

export default function ListCustomer() {
  const history = useHistory();

  const [allCustomer, setallCustomer] = useState([]);

  const getallData = () => {
    getAllCustomer().then(({ data }) => {
      const finalCustomers = data.success.data.map(({ ...rest }) => ({
        userType: "customer",
        ...rest,
      }));

      getAllStaff().then(({ data }) => {
        const finalStaff = data.success.data.map(({ userType, ...rest }) => ({
          userType,
          ...rest,
        }));
        setallCustomer([...finalStaff, ...finalCustomers]);
      });
    });
  };

  useEffect(() => {
    getallData();
  }, []);

  const editCustomer = (id) => {
    const selectedCustomer = allCustomer.find(({ _id }) => String(_id) === String(id));
    history.push({
      pathname: selectedCustomer.userType === "customer" ? "/AddCustomer" : "/AddStaff",
      state: selectedCustomer,
    });
  };

  const deleteCustomerr = (id) => {
    const status = window.confirm("Are you sure");
    if (status === true) {
      const selectedCustomer = allCustomer.find(({ _id }) => String(_id) === String(id));
      if (selectedCustomer.userType === "customer") {
        deleteCustomer(id).then(() => {
          getallData();
        });
      } else {
        deleteStaff(id).then(() => {
          getallData();
        });
      }
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
              {allCustomer.map(({ name, phoneNumber, email, _id, userType }) => (
                <tr key={_id}>
                  <td>{String(_id).substr(0, 6)}</td>
                  <td>{name}</td>
                  <td>{userType}</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: "245px",
                    }}
                  >
                    <button className="btn btn-primary btn-sm" onClick={() => editCustomer(_id)}>
                      <i className="fas fa-folder pr-1"></i>
                      View
                    </button>
                    <button className="btn btn-info btn-sm" onClick={() => editCustomer(_id)}>
                      <i className="fas fa-pencil-alt pr-1"></i>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteCustomerr(_id)}>
                      <i className="fas fa-trash pr-1"></i>
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
