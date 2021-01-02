import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { postCustomer, updateCustomer } from "../../ApiService";
import Container from "../../Container/Container";

export default function AddCustomer() {
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
    data.role = "customer";

    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    if (isUpdate) {
      updateCustomer(location.state._id, formData)
        .then(({ data }) => {
          if (data.success.statusCode === 200) {
            toast.success("Updated customer success");
            history.push("/ListCustomer");
          } else {
            console.log(data);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      postCustomer(formData)
        .then(({ data }) => {
          if (data.success.statusCode === 200) {
            toast.success("Added customer success");
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
              <h3 className="card-title">{isUpdate ? "UPDATE" : "ADD"} USER</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" placeholder="Enter Name" name="name" ref={register} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter Email" ref={register} name="email" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input className="form-control" placeholder="Enter Phone Number" name="phoneNumber" ref={register} />
                </div>
                <div className="form-group">
                  <label>GST Number</label>
                  <input className="form-control" placeholder="Enter GST Number" ref={register} name="GSTNumber" />
                </div>
                <div className="form-group">
                  <label>Bussiness Type</label>
                  <select className="form-control select2" style={{ width: "100%" }} ref={register} name="Bussiness Type">
                    <option >Super Stockist</option>
                    <option>Wholesale Distributor</option>
                    <option> Retail Distributor</option>
                    <option>Retail Store</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Enter ..."
                    defaultValue={""}
                    ref={register}
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <select className="form-control select2" style={{ width: "100%" }} ref={register} name="state">
                    <option >Kerla</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Pondicherry</option>
                    <option>Telengana</option>
                    <option>Andhra Pradesh</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Customer Discount</label>
                  <input ref={register} name="customerDiscount" type="number" className="form-control" placeholder="Enter Customer Discount" />
                </div>
                <div className="form-group">
                  <label>Credit Limit Time</label>
                  <input ref={register} name="creditLimitTime" type="number" className="form-control" placeholder="Enter Credit Limit Time" />
                </div>
                <div className="form-group">
                  <label>Credit Limit Amount</label>
                  <input ref={register} name="creditLimitAmount" type="number" className="form-control" placeholder="Enter Credit Limit Amount" />
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    {isUpdate ? "Update" : "Add"} User
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
