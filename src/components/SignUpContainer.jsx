import React from "react";
import { connect } from "react-redux";
import SignUpPresentation from "./SignUpPresentation";
import * as mutations from "../app/store/mutations";
function SignUpContainer({ handleInputValidation, userNameStatus }) {
  return (
    <div>
      <SignUpPresentation
        handleSignUp={handleInputValidation}
        userNameStatus={userNameStatus}
      />
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  const userNameStatus = state.users[0];
  console.log("usernamestatus", userNameStatus);
  return {
    userNameStatus,
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleInputValidation(username) {
      dispatch(mutations.verifyUserInput(username));
    },
    handleSignUp(username, password) {
      dispatch(mutations.userSignUp(username, password));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
