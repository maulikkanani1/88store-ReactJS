import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import DashBoard from "./pages/DashBoard";

import AddCustomer from "./pages/Customer/AddCustomer";
import ListCustomer from "./pages/Customer/ListCustomer";
import AddStaff from "./pages/Customer/AddStaff";

import AddInventory from "./pages/Inventory/AddInventory";
import ListInventory from "./pages/Inventory/ListInventory";

import CurrentOrders from "./pages/Orders/CurrentOrders";
import DispatchOrders from "./pages/Orders/DispatchOrders";
import CompletedOrders from "./pages/Orders/CompletedOrders";

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
          <Route exact path="/AddStaff" component={AddStaff} />
          <Route exact path="/CurrentOrders" component={CurrentOrders} />
          <Route exact path="/DispatchOrders" component={DispatchOrders} />
          <Route exact path="/CompletedOrders" component={CompletedOrders} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}
