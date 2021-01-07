import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { postCustomer, updateCustomer } from "../../ApiService";
import Container from "../../Container/Container";
import Custome_Input from "../../components/Custome_Input";

export default function AddCustomer() {
  const history = useHistory();
  const location = useLocation();
  const methods = useForm();
  const { register, handleSubmit, setValue } = methods;

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
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <Custome_Input name="name" label="Name" isrequired />
                  <Custome_Input name="email" type="email" label="Email" isrequired />
                  <Custome_Input name="phoneNumber" label="Phone Number" isrequired />
                  <Custome_Input name="GSTNumber" label="GST Number" isrequired />
                  <Custome_Input name="email" label="Email" isrequired />

                  <Custome_Input
                    name="Bussiness Type"
                    label="Bussiness Type"
                    isrequired
                    type="select"
                    option={[
                      {
                        label: "Retail Store",
                        value: "Retail Store",
                      },
                      {
                        label: "Retail Distributor",
                        value: "Retail Distributor",
                      },
                      {
                        label: "Super Stockist",
                        value: "Super Stockist",
                      },
                      {
                        label: "Wholesale Distributor",
                        value: "Wholesale Distributor",
                      },
                    ]}
                  />

                  <Custome_Input tag="textarea" name="address" label="Address" isrequired />

                  <Custome_Input
                    name="state"
                    label="State"
                    isrequired
                    type="select"
                    option={[
                      {
                        label: "Kerla",
                        value: "Kerla",
                      },
                      {
                        label: "Tamil Nadu",
                        value: "Tamil Nadu",
                      },
                      {
                        label: "Karnataka",
                        value: "Karnataka",
                      },
                      {
                        label: "Pondicherry",
                        value: "Pondicherry",
                      },
                      {
                        label: "Telengana",
                        value: "Telengana",
                      },
                      {
                        label: "Andhra Pradesh",
                        value: "Andhra Pradesh",
                      },
                    ]}
                  />
                  <Custome_Input name="customerDiscount" type="number" label="Customer Discount" />

                  <Custome_Input name="creditLimitTime" type="number" label="Credit Limit Time" />

                  <Custome_Input name="creditLimitAmount" type="number" label="Credit Limit Amount" />

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      {isUpdate ? "Update" : "Add"} User
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
