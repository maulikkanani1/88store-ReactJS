import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import DashBoard from "./pages/DashBoard";
import AddCustomer from "./pages/Customer/AddCustomer";
import ListCustomer from "./pages/Customer/ListCustomer";
import AddStaff from "./pages/Customer/AddStaff";
import AddSupplier from "./pages/Customer/AddSupplier";
import SupplierList from "./pages/Customer/SupplierList";

import AddInventory from "./pages/Inventory/AddInventory";
import ListInventory from "./pages/Inventory/ListInventory";
import BulkUpload from "./pages/Inventory/BulkUpload";

import OrdersList from "./pages/Orders/OrdersList";
import OrderDetails from "./pages/Orders/OrderDetails";

import AddInvoice from "./pages/ExpenseManager/AddInvoice";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={DashBoard} />

          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/AddCustomer" component={AddCustomer} />
          <Route exact path="/ListCustomer" component={ListCustomer} />
          <Route exact path="/AddInventory" component={AddInventory} />
          <Route exact path="/ListInventory" component={ListInventory} />
          <Route exact path="/BulkUpload" component={BulkUpload} />
          <Route exact path="/AddStaff" component={AddStaff} />
          <Route exact path="/AddSupplier" component={AddSupplier} />
          <Route exact path="/SupplierList" component={SupplierList} />

          <Route exact path="/Orders/:orderstatus" component={OrdersList} />
          <Route exact path="/OrderDetails" component={OrderDetails} />

          <Route exact path="/AddInvoice" component={AddInvoice} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}
