import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as mutations from "../app/store/mutations";
import { Link } from "react-router-dom";
function Logout({ userlogout, username }) {
  useEffect(() => {
    userlogout(username);
  }, []);
  return (
    <div>
      <h1>
        <span style={{ color: "red", fontFamily: "robo", marginTop: "50px" }}>
          Logged Out!!
        </span>
      </h1>
      <Link to="/">
        <button className="btn btn-dark">Login</button>
      </Link>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  const username = state.session.username;
  return {
    username,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    userlogout(username) {
      dispatch(mutations.userLogout(username));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
