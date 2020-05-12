import React from "react";
import { connect } from "react-redux";
import SignUpPresentation from "./SignUpPresentation";
import * as mutations from "../app/store/mutations";
function SignUpContainer({ handleInputValidation }) {
  return (
    <div>
      <SignUpPresentation handleSignUp={handleInputValidation} />
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return state;
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleInputValidation(username, password, confirmpassword) {
      dispatch(mutations.verifyUserInput(username, password, confirmpassword));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
