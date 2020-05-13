import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";
import { store } from "../app/store";
import { history } from "../app/store/history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import TaskDetails from "./TaskDetails";
import Login from "./Login";
import SignUpContainer from "./SignUpContainer";
import Logout from "./Logout";
const RouterGaurd = (Component) => ({ match }) => {
  if (!store.getState().session.authenticated) {
    return <Redirect to="/" />;
  } else {
    return <Component match={match} userId={store.getState().session.id} />;
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
            <Route exact path="/signup" render={() => <SignUpContainer />} />
            <Route exact path="/logout" render={() => <Logout />} />
          </div>
        </Provider>
      </Router>
    </div>
  );
}
export default Main;
