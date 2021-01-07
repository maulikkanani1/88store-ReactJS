import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { postSupplier, updateSupplier } from "../../ApiService";
import Custome_Input from "../../components/Custome_Input";
import Container from "../../Container/Container";

export default function AddSupplier() {
  const history = useHistory();
  const location = useLocation();
  const methods = useForm();
  const { handleSubmit, setValue } = methods;

  const [isUpdate, setisUpdate] = useState(false);

  useEffect(() => {
    if (location.state) {
      setisUpdate(true);
      Object.keys(location.state).forEach((key) => setValue(key, location.state[key]));
    }
  }, [location.state]);

  const onSubmit = (data) => {
    if (isUpdate) {
      updateSupplier(location.state._id, data)
        .then(({ data }) => {
          if (data.success.statusCode === 200) {
            toast.success("Updated Supplier success");
            history.push("/SupplierList");
          } else {
            console.log(data);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      postSupplier(data)
        .then(({ data }) => {
          if (data.success.statusCode === 200) {
            toast.success("Added Supplier success");
            history.push("/SupplierList");
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
              <h3 className="card-title">{isUpdate ? "UPDATE" : "ADD"} Supplier</h3>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <Custome_Input name="supplierName" label="Supplier name" isrequired />
                  <Custome_Input name="supplierEmail" type="email" label="Supplier Email" isrequired />
                  <Custome_Input name="supplierPhoneNumber" label="Supplier Phone Number" isrequired />
                  <Custome_Input name="supplierAddress" label="Supplier Address" isrequired />
                  <Custome_Input name="supplierGST" label="Supplier GST" isrequired />
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      {isUpdate ? "Update" : "Add"} Supplier
                    </button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </Container>
  );
}
