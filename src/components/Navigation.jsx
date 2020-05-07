import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navigation() {
  return (
    <div>
      <Link to="/dashboard">DashBoard</Link>
    </div>
  );
}

export default connect((state) => state)(Navigation);
