import React from "react";
import { connect } from "react-redux";
import SignUpPresentation from "./SignUpPresentation";
function SignUpContainer() {
  return (
    <div>
      <SignUpPresentation />
    </div>
  );
}
function mapDispatchToProps(dispatch, ownProps) {}
export default connect(mapDispatchToProps)(SignUpContainer);
