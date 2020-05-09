import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";
import { store } from "../app/store";
import { history } from "../app/store/history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import TaskDetails from "./TaskDetails";

import Login from "./Login";
const RouterGaurd = (Component) => ({ match }) => {
  if (!store.getState().session.authenticated) {
    return <Redirect to="/" />;
  } else {
    return <Component match={match} />;
  }
};
function Main() {
  return (
    <div>
      <Router history={history}>
        <Provider store={store}>
          <div>
            <Navigation />
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/dashboard" render={RouterGaurd(Dashboard)} />
            <Route exact path="/task/:id" render={RouterGaurd(TaskDetails)} />
          </div>
        </Provider>
      </Router>
    </div>
  );
}
export default Main;
