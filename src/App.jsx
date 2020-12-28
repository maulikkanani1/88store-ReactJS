import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "./assets/css/main.css";
import DashBoard from "./pages/DashBoard";

import AddCustomer from "./pages/Customer/AddCustomer";
import ListCustomer from "./pages/Customer/ListCustomer";
import AddStaff from "./pages/Customer/AddStaff";

import AddInventory from "./pages/Inventory/AddInventory";
import ListInventory from "./pages/Inventory/ListInventory";

import CurrentOrders from "./pages/Orders/CurrentOrders";
import OrderDetails from "./pages/Orders/OrderDetails";

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
          <Route exact path="/Orders/:orderstatus" component={CurrentOrders} />
          <Route exact path="/OrderDetails" component={OrderDetails} />
          
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}
