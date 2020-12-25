import React from "react";
import Container from "../Container/Container";

export default function AddInventry() {
  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">ADD ITEM</h3>
            </div>
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Product Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Product Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Product description
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Product description"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Shelf Life</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Shelf Life"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Gross Weight</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Gross Weight"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Product MRP</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Product MRP"
                  />
                </div>
                <div className="form-group">
                  <label>Veg / Non-Veg</label>
                  <select
                    className="form-control select2"
                    style={{ width: "100%" }}
                  >
                    <option selected="selected">none</option>
                    <option>Veg</option>
                    <option>Non-veg</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Quanity available</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Quanity available"
                  />
                </div>
                <div className="form-group">
                  <label>Unit</label>
                  <select
                    className="form-control select2"
                    style={{ width: "100%" }}
                  >
                    <option selected="selected">none</option>
                    <option>Kg</option>
                    <option>gm</option>
                    <option>ltr</option>
                    <option>ml</option>
                    <option>dozen</option>
                    <option>set</option>
                    <option>piece</option>
                    <option>ft</option>
                    <option>meter</option>
                    <option>sq.ft</option>
                    <option>sq meter</option>
                    <option>box</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Selling Price</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Selling Price"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">SP Discount</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter SP Discount"
                  />
                </div>
                <div className="form-group">
                  <label>GST</label>
                  <select
                    className="form-control select2"
                    style={{ width: "100%" }}
                  >
                    <option selected="selected">0%</option>
                    <option>5%</option>
                    <option>12%</option>
                    <option>18%</option>
                    <option>28%</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Custom Tax Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Custom Tax Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Custom Tax rate</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Custom Tax rate"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Purchase Price</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Purchase Price without GST"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Min Order Quantity (Bulk Orders)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Min Order Quantity (Bulk Orders)"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">MOQ Discount</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter MOQ Discount"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">HSN Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Product Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Country Of Orgin</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Country Of Orgin"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Select Category</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Select Category"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Add Sub Category</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Add Sub Category"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputFile">Item Image</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="exampleInputFile"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="exampleInputFile"
                      >
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-success">
                    Add Item
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
