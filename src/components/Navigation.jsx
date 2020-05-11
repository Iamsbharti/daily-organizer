import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navigation({ userId }) {
  return (
    <div>
      <nav
        className="navbar navbar-light mt-3"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand" href="/">
          <img
            src="src/images/org.png"
            width="50"
            height="50"
            class="d-inline-block align-top"
            alt=""
          />
          Organizer
        </a>
        <ul
          className="d-flex justify-content-end"
          style={{ listStyleType: "none" }}
        >
          {userId && <li className="nav-item">{`${userId} logged in`}</li>}
        </ul>
      </nav>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    userId: state.session.id,
  };
}
export default connect(mapStateToProps)(Navigation);
