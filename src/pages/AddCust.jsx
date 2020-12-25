import React from "react";
import Container from "../Container/Container";

export default function AddCust() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">ADD USER</h3>
            </div>
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Phone Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">GST Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter GST Number"
                  />
                </div>
                <div className="form-group">
                  <label>Bussiness Type</label>
                  <select
                    className="form-control select2"
                    style={{ width: "100%" }}
                  >
                    <option selected="selected">Super Stockist</option>
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
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <select
                    className="form-control select2"
                    style={{ width: "100%" }}
                  >
                    <option selected="selected">Kerla</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Pondicherry</option>
                    <option>Telengana</option>
                    <option>Andhra Pradesh</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Customer Discount</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Customer Discount"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Credit Limit Time</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Credit Limit Time"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Credit Limit Amount
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Credit Limit Amount"
                  />
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Add User
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
