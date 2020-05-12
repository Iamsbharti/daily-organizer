import React from "react";
import { connect } from "react-redux";
import SignUpPresentation from "./SignUpPresentation";
import * as mutations from "../app/store/mutations";
function SignUpContainer({ handleSignUp }) {
  return (
    <div>
      <SignUpPresentation handleSignUp={handleSignUp} />
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return state;
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSignUp(username, password) {
      dispatch(mutations.signUp(username, password));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
