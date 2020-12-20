import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashBoard from "./pages/DashBoard";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route exact path="/" component={DashBoard} />
      </Switch>
    </Router>
  );
}
