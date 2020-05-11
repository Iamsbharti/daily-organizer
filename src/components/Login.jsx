import React from "react";
import { connect } from "react-redux";
import * as mutations from "../app/store/mutations";
function Login({ authenticateUser, authenticated }) {
  return (
    <div className="card mt-5 pt-3 col-6">
      <h2>Login Here!!</h2>
      <form onSubmit={authenticateUser}>
        <input
          type="text"
          placeholder="username"
          name="username"
          defaultValue="Dev"
          className="form-control"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          defaultValue=""
          className="form-control"
        />
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>Login Failed!!</p>
        ) : (
          ""
        )}
        <button className="form-control btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
}
function mapStateToProps(state) {
  return { authenticated: state.session.authenticated };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    authenticateUser(e) {
      e.preventDefault();
      let username = e.target["username"].value;
      let password = e.target["password"].value;
      dispatch(mutations.requestAuthenticateUser(username, password));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
