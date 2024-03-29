import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { postStaff, updateStaff } from "../../ApiService";
import Container from "../../Container/Container";
import Custome_Input from "../../components/Custome_Input";

export default function AddStaff() {
  const history = useHistory();
  const location = useLocation();
  const [isUpdate, setisUpdate] = useState(false);

  const methods = useForm();
  const { handleSubmit, setValue } = methods;
  
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
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <Custome_Input
                    name="userType"
                    label="User Type"
                    isrequired
                    type="select"
                    option={[
                      {
                        label: "Sales Person",
                        value: "Sales Person",
                      },
                      {
                        label: "Warehouse",
                        value: "Warehouse",
                      },
                      {
                        label: "Partner",
                        value: "Partner",
                      },
                    ]}
                  />
                  <Custome_Input name="name" label="Name" isrequired />
                  <Custome_Input name="email" type="email" label="Email" isrequired />
                  <Custome_Input name="phoneNumber" label="Phone Number" isrequired />

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      {isUpdate ? "Update" : "Add"} Staff
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
