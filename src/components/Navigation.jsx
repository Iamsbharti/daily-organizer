import React from "react";

import { connect } from "react-redux";

function Navigation({ username }) {
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
            className="d-inline-block align-top"
            alt=""
          />
          Organizer
        </a>
        <ul
          className="d-flex justify-content-end"
          style={{ listStyleType: "none" }}
        >
          {username && <li className="nav-item">{`${username} logged in`}</li>}
        </ul>
      </nav>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    username: state.session.username,
  };
}
export default connect(mapStateToProps)(Navigation);
