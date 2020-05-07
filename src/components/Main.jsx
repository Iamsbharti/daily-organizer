import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";
import { store } from "../app/store";
import { history } from "../app/store/history";
import { Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
function Main() {
  return (
    <div>
      <Router history={history}>
        <Provider store={store}>
          <div>
            <Navigation />
            <Route exact path="/dashboard" render={() => <Dashboard />} />
          </div>
        </Provider>
      </Router>
    </div>
  );
}
export default Main;
