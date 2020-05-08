import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";
import { store } from "../app/store";
import { history } from "../app/store/history";
import { Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import TaskDetails from "./TaskDetails";
function Main() {
  return (
    <div>
      <Router history={history}>
        <Provider store={store}>
          <div>
            <Navigation />
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route
              exact
              path="/task/:id"
              render={({ match }) => <TaskDetails match={match} />}
            />
          </div>
        </Provider>
      </Router>
    </div>
  );
}
export default Main;
