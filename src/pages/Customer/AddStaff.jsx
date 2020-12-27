import React from "react";
import Container from "../../Container/Container";

export default function AddStaff() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">ADD STAFF</h3>
            </div>
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label>User Type</label>
                  <select className="form-control select2" style={{ width: "100%" }}>
                    <option selected="selected">Sales Person</option>
                    <option>Warehouse</option>
                    <option>Partner</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" />
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
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Add Staff
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
