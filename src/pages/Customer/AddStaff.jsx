import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { postStaff, updateStaff } from "../../ApiService";
import Container from "../../Container/Container";

export default function AddStaff() {
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit, setValue } = useForm();

  const [isUpdate, setisUpdate] = useState(false);

  useEffect(() => {
    if (location.state) {
      setisUpdate(true);
      Object.keys(location.state).forEach((key) => setValue(key, location.state[key]));
    }
  }, [location.state]);

  const onSubmit = (data) => {
    if (isUpdate) {
      updateStaff(location.state._id, data)
        .then(({ data }) => {
          if (data.success.statusCode === 200) {
            toast.success("Updated staff success");
            history.push("/ListCustomer");
          } else {
            console.log(data);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      postStaff(data)
        .then(({ data }) => {
          if (data.success.statusCode === 200) {
            toast.success("Added staff success");
            history.push("/ListCustomer");
          } else {
            console.log(data);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">{isUpdate ? "UPDATE" : "ADD"} STAFF</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-group">
                  <label>User Type</label>
                  <select name="userType" ref={register} className="form-control select2">
                    <option>Sales Person</option>
                    <option>Warehouse</option>
                    <option>Partner</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input ref={register} name="name" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input ref={register} name="email" type="email" className="form-control" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input ref={register} name="phoneNumber" className="form-control" placeholder="Enter Phone Number" />
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    {isUpdate ? "Update" : "Add"} Staff
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
