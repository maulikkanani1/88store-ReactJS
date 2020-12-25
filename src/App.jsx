import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashBoard from "./pages/DashBoard";
import AddCust from "./pages/AddCust";
import AddInventory from "./pages/AddInventory";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />

        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/AddCust" component={AddCust} />
        <Route exact path="/AddInventory" component={AddInventory} />
      </Switch>
    </Router>
  );
}
