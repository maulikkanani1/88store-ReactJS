import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Container from "../../Container/Container";
import { update_Order, generateInvoice } from "../../ApiService";

const ConfirmOrder = ({ inventory, _id }) => {
  const history = useHistory();
  const [selectedItem, setselectedItem] = useState(inventory);

  const post_ConfirmOrder = () => {
    const finalTotal = selectedItem.map(({ netPrice }) => netPrice).reduce((prev, next) => prev + next, 0);
    const updatedData = {
      inventory: selectedItem,
      orderStatus: "confirm",
      finalTotal,
    };
    update_Order(updatedData, _id)
      .then(() => history.push("/Orders/Dispatch"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>quantity</th>
                <th>total</th>
                <th>check</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(({ userQuantity, netPrice, _id: itemId, inventoryId }) => (
                <tr key={itemId}>
                  <td>{String(itemId).substr(0, 5)}</td>
                  <td>
                    <img
                      src={`http://139.59.46.91:3001/InventoryImage/${inventoryId.images[0]}`}
                      alt="aa"
                      style={{ height: "50px" }}
                      className="img rounded "
                    />
                  </td>
                  <td>{inventoryId.name}</td>
                  <td>{userQuantity}</td>
                  <td>{netPrice}</td>
                  <td>
                    <input
                      className="form-check-input ml-0"
                      checked={selectedItem.some((item) => String(item._id) === String(itemId))}
                      onChange={(e) => {
                        setselectedItem(
                          inventory.filter((item) => (String(item._id) === String(itemId) ? e.target.checked : true))
                        );
                      }}
                      type="checkbox"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <BackButton />
        <button className="btn btn-success" onClick={post_ConfirmOrder}>
          CONFIRM ORDERS
        </button>
      </div>
    </>
  );
};

const DispatchOrder = ({ _id, finalTotal, inventory, orderId, subTotal, clientId }) => {
  const history = useHistory();
  const [distachForm, setdistachForm] = useState({
    courier_Name: "",
    parcel_Id: "",
    courier_Phonenumber: "",
    estimated_date_arrival: new Date(),
    sendInvoice: true,
  });

  const post_ConfirmOrder = () => {
    if (
      !distachForm.courier_Name ||
      !distachForm.courier_Phonenumber ||
      !distachForm.estimated_date_arrival ||
      !distachForm.parcel_Id
    )
      return alert("Please fill All details");

    const updateData = {
      distachForm: distachForm,
      orderStatus: "dispatch",
      finalTotal,
    };

    const updatedInventory = inventory.map((item) => {
      const { discountPerUnit, priceOfSale, GSTSleb } = item.inventoryId;

      const Amount = priceOfSale * item.userQuantity;
      const DiscountAmount = (Amount * discountPerUnit) / 100;
      const TaxableValue = Amount - DiscountAmount;
      const GSTRS = (TaxableValue * GSTSleb) / 100;
      const Total = TaxableValue + GSTRS;
      return {
        ...item,
        inventoryId: {
          ...item.inventoryId,
          Amount,
          DiscountAmount,
          TaxableValue,
          GSTRS,
          Total,
        },
      };
    });

    const sunArrofObj = (arr, key) => arr.reduce((a, b) => a + b["inventoryId"][key], 0);

    const TotalAmountBeforeTax = sunArrofObj(updatedInventory, "TaxableValue");
    const TotalTax = sunArrofObj(updatedInventory, "GSTRS");
    const CGST = TotalTax / 2;
    const SGST = TotalTax / 2;
    const TotalAmountAfterTax = TotalAmountBeforeTax - TotalTax;
    const Roundoff = Math.ceil(TotalAmountAfterTax);
    const TOTAL = Math.ceil(TotalAmountAfterTax);

    const InvoiceData = {
      _id,
      TotalAmountBeforeTax,
      TotalTax,
      CGST,
      SGST,
      TotalAmountAfterTax,
      Roundoff,
      TOTAL,
      inventory: updatedInventory,
      orderId,
      subTotal,
      clientId,
      ...updateData,
    };

    generateInvoice(InvoiceData);
    update_Order(updateData, _id)
      .then(() => history.push("/Orders/Completed"))
      .catch((e) => console.log(e));
  };

  const handleDistachForm = (value, key) => setdistachForm({ ...distachForm, [key]: value });

  return (
    <>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(({ userQuantity, netPrice, _id: itemId, inventoryId }) => (
              <tr key={itemId}>
                <td>{String(itemId).substr(0, 5)}</td>
                <td>
                  <img
                    src={`http://139.59.46.91:3001/InventoryImage/${inventoryId.images[0]}`}
                    alt="aa"
                    style={{ height: "50px" }}
                    className="img rounded "
                  />
                </td>
                <td>{inventoryId.name}</td>
                <td>{userQuantity}</td>
                <td>{netPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form className="text-uppercase">
          <div className="form-group">
            <label>COURIER NAME :</label>
            <input
              onChange={(e) => handleDistachForm(e.target.value, "courier_Name")}
              className="form-control"
              placeholder="COURIER NAME "
            />
          </div>
          <div className="form-group">
            <label>PARCEL ID :</label>
            <input
              onChange={(e) => handleDistachForm(e.target.value, "parcel_Id")}
              className="form-control"
              placeholder="PARCEL ID"
            />
          </div>
          <div className="form-group">
            <label>COURIER PHONE NUMBER :</label>
            <input
              onChange={(e) => handleDistachForm(e.target.value, "courier_Phonenumber")}
              className="form-control"
              placeholder="PARCEL ID"
            />
          </div>
          <div className="form-group">
            <label>estimated date arrival :</label>
            <input
              type="date"
              onChange={(e) => handleDistachForm(e.target.value, "estimated_date_arrival")}
              className="form-control"
            />
          </div>
          <div className="form-check">
            <input
              checked={distachForm.sendInvoice}
              onChange={(e) => handleDistachForm(e.target.value, "sendInvoice")}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Send Invoice
            </label>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-between">
        <BackButton />
        <button className="btn btn-success" onClick={post_ConfirmOrder}>
          CONFIRM DISPATCH
        </button>
      </div>
    </>
  );
};

const CompleteOrder = ({ _id, address }) => {
  const history = useHistory();
  const [paymentForm, setpaymentForm] = useState({
    due_amount: "",
    paid_amount: "",
    mode_of_payment: "Processed Food",
  });

  const post_Completeorder = () => {
    const finaldata = {
      due_amount: Number(paymentForm.due_amount) - Number(paymentForm.paid_amount),
      mode_of_payment: paymentForm.mode_of_payment,
      paid_amount: paymentForm.paid_amount,
      // orderStatus: "complete",
    };

    update_Order(finaldata, _id)
      .then(() => history.push("/Orders/Current"))
      .catch((e) => console.log(e));
  };
  const handlePaymentForm = (value, key) => setpaymentForm({ ...paymentForm, [key]: value });

  return (
    <>
      <div>
        <div className="row">
          <div className="col">
            <p className="font-weight-bold text-uppercase">bill to : {address}</p>
          </div>
          <div className="col">
            <p className="font-weight-bold text-uppercase">ship to : {address}</p>
          </div>
        </div>
        <form className="text-uppercase">
          <div className="form-group">
            <label>due amount</label>
            <input
              type="number"
              onChange={(e) => handlePaymentForm(e.target.value, "due_amount")}
              className="form-control"
              placeholder="due amount"
            />
          </div>
          <div className="form-group">
            <label>paid amount</label>
            <input
              type="number"
              onChange={(e) => handlePaymentForm(e.target.value, "paid_amount")}
              className="form-control"
              placeholder="paid amount"
            />
          </div>
          <div className="form-group">
            <label>mode of payment</label>
            <select onChange={(e) => handlePaymentForm(e.target.value, "mode_of_payment")} className="form-control">
              <option>Processed Food</option>
              <option>Processed Food 2</option>
            </select>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-between">
        <BackButton />
        <button className="btn btn-success" onClick={post_Completeorder}>
          COMPLETE ORDERS
        </button>
      </div>
    </>
  );
};

const BackButton = () => {
  const history = useHistory();
  return (
    <button className="btn btn-success" onClick={() => history.goBack()}>
      BACK TO ORDERS
    </button>
  );
};

export default function OrderDetails() {
  const { state } = useLocation();
  const history = useHistory();
  const [orderData, setorderData] = useState(false);

  useEffect(() => {
    setorderData(state);
  }, [state]);

  if (!orderData) {
    if (orderData === undefined) {
      history.push("/Orders/Current");
      return <></>;
    } else {
      return <></>;
    }
  }

  const { clientId, subTotal, finalTotal, createdAt, _id, inventory, orderId } = orderData;
  const { _id: custId, email, name, phoneNumber, address } = clientId;

  const renderOrderscreen = () => {
    switch (orderData.orderStatus) {
      case "pending":
        return <ConfirmOrder _id={_id} inventory={inventory} />;

      case "confirm":
        return (
          <DispatchOrder
            _id={_id}
            finalTotal={finalTotal}
            inventory={inventory}
            orderId={orderId}
            subTotal={subTotal}
            clientId={clientId}
          />
        );

      case "dispatch":
        return <CompleteOrder _id={_id} address={address} />;
    }
  };

  return (
    <Container>
      <div className="d-flex flex-column  ">
        <div className="flex-column">
          <div className="row pt-2 border-top border-bottom border-width text-uppercase">
            <div className="col">
              <p>order id : {orderId}</p>
              <p>cust id : {String(custId).substr(0, 5)}</p>
              <p>name : {name}</p>
            </div>
            <div className="col">
              <p>Order date : {new Date(createdAt).toLocaleDateString()}</p>
              <p>Order value : {finalTotal}</p>
              <p>phone : {phoneNumber}</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between " style={{ height: "70vh" }}>
          {renderOrderscreen()}
        </div>
      </div>
    </Container>
  );
}
