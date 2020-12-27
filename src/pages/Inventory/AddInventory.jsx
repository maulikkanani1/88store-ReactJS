import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { postInventory, updateInventory } from "../../ApiService";
import catogaryData from "../../helper/constant/catogary.json";
import countryData from "../../helper/constant/country.json";

import Container from "../../Container/Container";

export default function AddInventry(props) {
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
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, key === "files" ? data[key][0] : data[key]));

    if (isUpdate) {
      updateInventory(location.state._id, formData)
        .then(({ data }) => {
          if (data.success.statusCode === 200) {
            toast.success("Updated Inventory success");
            history.push("/ListInventory");
          } else {
            console.log(data);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      postInventory(formData)
        .then(({ data }) => {
          if (data.statusCode === 200) {
            toast.success("Added Inventory success");
            history.push("/ListInventory");
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
              <h3 className="card-title">{isUpdate ? "UPDATE" : "ADD"} ITEM</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-group">
                  <label>Product Name</label>
                  <input className="form-control" placeholder="Enter Product Name" ref={register} name="name" />
                </div>
                <div className="form-group">
                  <label>Product description</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter Product description"
                    ref={register}
                    name="description"
                  />
                </div>
                <div className="form-group">
                  <label>Shelf Life</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Shelf Life"
                    name="shelfLife"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Veg / Non-Veg</label>
                  <select className="form-control select2" name="itemType" ref={register}>
                    <option>Veg</option>
                    <option>Non-veg</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Quanity available</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Quanity available"
                    name="availableQuantity"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Unit</label>
                  <select className="form-control select2" name="quantityType" ref={register}>
                    <option>pieces</option>
                    <option>bottle</option>
                    <option>boxes</option>
                    <option>sheets</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Selling Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Selling Price"
                    name="priceOfSale"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Unit per Order</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Unit per Order"
                    name="BOQ"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>GST</label>
                  <select className="form-control select2" name="GSTSleb" ref={register}>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Discount in Percentage per Unit</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Discount in Percentage per Unit"
                    name="discountPerUnit"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Unit Per Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Unit Per Quantity"
                    name="unitPerQuantity"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Purchase Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Purchase Price without GST"
                    name="priceOfPurchase"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Purchase Price With GST</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Purchase Price With GST"
                    name="purchasePriceWithGST"
                    ref={register}
                  />
                </div>

                <div className="form-group">
                  <label>Min Order Quantity (Bulk Orders)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Min Order Quantity (Bulk Orders)"
                    name="MOQ"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>MOQ Discount</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter MOQ Discount"
                    name="discountPerMOQ"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>HSN Number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter HSN Number"
                    name="HSNNumber"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <label>Country Of Orgin</label>
                  <select className="form-control select2" name="countryOfOrigin" ref={register}>
                    {countryData.map(({ name }) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Select Category</label>
                  <select className="form-control select2" name="itemCategory" ref={register}>
                    {catogaryData.map(({ title }) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Add Sub Category</label>
                  <select className="form-control select2" name="itemSubcategory" ref={register}>
                    <option>Food</option>
                    <option>Food1</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Item Image</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" name="files" ref={register} />
                      <label className="custom-file-label">Choose file</label>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <button type="submit" className="btn btn-success">
                    {isUpdate ? "Update" : "Add"} Item
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
