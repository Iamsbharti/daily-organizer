import React from "react";
import { connect } from "react-redux";
import * as mutations from "../app/store/mutations";
function Login({ authenticateUser, authenticated }) {
  return (
    <div className="card mt-5 pt-3 col-6">
      <h1>
        <span class="badge badge-dark">Login Here</span>
      </h1>
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
        <div className="row">
          <button className="form-control btn btn-primary mt-2 col p-2 ml-3">
            Login
          </button>
          <button className="form-control btn btn-success mt-2 ml-3 col mr-3">
            SignUp
          </button>
        </div>
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
