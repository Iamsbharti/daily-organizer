import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";
import { store } from "../app/store";

function Main() {
  return (
    <div>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
}
export default Main;
