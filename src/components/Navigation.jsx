import React, { useState } from "react";
import { connect } from "react-redux";
import images from "../../public/images/org.png";
import { Link } from "react-router-dom";
function Navigation({ username }) {
  return (
    <div>
      <nav
        className="navbar navbar-light mt-3"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <a className="navbar-brand" href="/">
          <img
            src={images}
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
          {username && (
            <>
              <li className="nav-item mt-2">{`${username} logged in`}</li>
              <li className="nav-item ml-2">
                <Link to="/logout">
                  <button className="btn btn-link">Logout</button>
                </Link>
              </li>
            </>
          )}
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
