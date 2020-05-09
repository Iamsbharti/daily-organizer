import React from "react";
import { connect } from "react-redux";
function Login() {
  return <div>Login Here!</div>;
}
function mapStateToProps(state, ownprops) {
  return state;
}
export default connect(mapStateToProps)(Login);
