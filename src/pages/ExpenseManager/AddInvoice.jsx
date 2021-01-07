import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { postSupplier, updateSupplier, getAllSupplier } from "../../ApiService";
import Custome_Input from "../../components/Custome_Input";
import Container from "../../Container/Container";

const Procurement_Form = ({ modeofpayment, paid, allSupplier }) => (
  <>
    <Custome_Input label="Date" name="Date" type="date" />
    <Custome_Input
      label="Supplier Name"
      name="supplierName"
      option={allSupplier.map(({ supplierName, _id }) => ({
        value: _id,
        label: supplierName,
      }))}
      type="select"
      isrequired
    />
    <Custome_Input label="Supplier ID" name="supplierId" />
    <Custome_Input label="Supplier Email" type="email" name="supplierEmail" isrequired />
    <Custome_Input label="Supplier PhoneNumber" name="supplierPhoneNumber" isrequired />
    <Custome_Input label="Supplier Address" name="supplierAddress" />
    <Custome_Input label="Supplier GST" name="supplierGST" isrequired />
    <Custome_Input label="Invoice value" type="number" name="supplierInvoicevalue" isrequired />
    <Custome_Input label="Upload Invoice (img or pdf)" name="supplierUploadInvoice" type="file" isrequired />
    <Custome_Input
      label="Paid"
      name="paid"
      option={[
        { value: "full", label: "full" },
        { value: "partial", label: "partial" },
        { value: "unpaid", label: "unpaid" },
      ]}
      type="select"
    />
    <Custome_Input
      label="mode of payment"
      name="modeofpayment"
      option={[
        { value: "cash", label: "cash" },
        { value: "bankTransfer", label: "bank transfer" },
        { value: "UPI", label: "UPI" },
      ]}
      type="select"
      isrequired={paid === "full" || paid === "partial" ? true : false}
    />

    <Custome_Input label="date of payment" name="dateofpayment" type="date" />
    <Custome_Input
      label="Amount Paid"
      name="amountPaid"
      type="number"
      isrequired={paid === "full" || paid === "partial" ? true : false}
      disabled={paid === "unpaid" ? true : paid === "partial" && false}
    />
    <Custome_Input
      label="reference Number"
      name="referenceNumber"
      isrequired={modeofpayment === "bankTransfer" || modeofpayment === "UPI" ? true : false}
    />
  </>
);

const Sales_Form = () => (
  <>
    <Custome_Input label="Date" name="Date" type="date" />
    <Custome_Input label="Customer ID" name="customerId" />
    <Custome_Input label="Customer Name" name="customerName" isrequired />
    <Custome_Input label="Customer Email" type="email" name="customerEmail" isrequired />
    <Custome_Input label="Customer PhoneNumber" name="customerPhoneNumber" isrequired />
    <Custome_Input label="Customer Address" name="customerAddress" />
    <Custome_Input label="Customer Shipping Address" name="customerShippingAddress" />
    <Custome_Input label="Customer GST" name="customerGST" isrequired />
    <Custome_Input label="Invoice value" type="number" name="customerInvoiceValue" isrequired />
    <Custome_Input label="Upload Invoice (img or pdf)" name="customerUploadInvoice" type="file" isrequired />
  </>
);

const Voucher_Form = () => (
  <>
    <Custome_Input label="Date" name="Date" type="date" />
    <Custome_Input label="Staff ID" name="staffID" />
    <Custome_Input label="Staff name" name="staffName" isrequired />
    <Custome_Input label="Staff mail id" name="staffEmail" type="email" isrequired />
    <Custome_Input label="Staff phone number" name="staffPhoneNumber" isrequired />
    <Custome_Input label="Bill value" name="staffBillValue" isrequired />
    <Custome_Input label="Upload Bill" name="staffUploadBill" isrequired />
  </>
);

export default function AddSupplier() {
  const history = useHistory();
  const location = useLocation();
  const [isUpdate, setisUpdate] = useState(false);
  const [allSupplier, setallSupplier] = useState([]);

  const methods = useForm({
    defaultValues: {
      paid: "full",
      modeofpayment: "cash",
      type: "Procurement",
    },
  });
  const { handleSubmit, setValue, watch } = methods;

  useEffect(() => {
    getAllSupplier().then(({ data }) => setallSupplier(data.success.data));
  }, []);

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
      console.log(data);
      // postSupplier(data)
      //   .then(({ data }) => {
      //     if (data.success.statusCode === 200) {
      //       toast.success("Added Supplier success");
      //       history.push("/SupplierList");
      //     } else {
      //       console.log(data);
      //     }
      //   })
      //   .catch((error) => console.log("error", error));
    }
  };

  const { paid, modeofpayment, type, supplierName } = watch();

  useEffect(() => {
    if (supplierName) {
      const { supplierAddress, supplierEmail, supplierGST, supplierPhoneNumber, _id: supplierId } = allSupplier.find(
        ({ _id }) => String(_id) === String(supplierName)
      );
      for (const [key, value] of Object.entries({
        supplierAddress,
        supplierEmail,
        supplierGST,
        supplierPhoneNumber,
        supplierId,
      })) {
        setValue(key, value);
      }
    }
  }, [supplierName]);

  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">{isUpdate ? "UPDATE" : "ADD"} Invoice</h3>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <Custome_Input
                    label="Type"
                    name="type"
                    option={[
                      { value: "Procurement", label: "Procurement" },
                      { value: "Sales", label: "Sales" },
                      { value: "Voucher", label: "Voucher" },
                    ]}
                    type="select"
                  />

                  {type === "Procurement" ? (
                    <Procurement_Form
                      paid={paid}
                      modeofpayment={modeofpayment}
                      supplierName={supplierName}
                      allSupplier={allSupplier}
                    />
                  ) : type === "Voucher" ? (
                    <Voucher_Form />
                  ) : (
                    type === "Sales" && <Sales_Form />
                  )}

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      {isUpdate ? "Update" : "Add"} Invoice
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
