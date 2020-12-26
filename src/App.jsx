import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashBoard from "./pages/DashBoard";
import AddCust from "./pages/AddCust";
import ListUsers from "./pages/ListUsers";
import AddInventory from "./pages/AddInventory";
import ListInventory from "./pages/ListInventory";



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />

        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/AddCust" component={AddCust} />
        <Route exact path="/ListUsers" component={ListUsers} />
        <Route exact path="/AddInventory" component={AddInventory} />
        <Route exact path="/ListInventory" component={ListInventory} />

      </Switch>
    </Router>
  );
}
