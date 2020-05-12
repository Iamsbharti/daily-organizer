import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="card col-6 mt-4">
      <h1>
        <span className="badge badge-dark mt-2">Few Details Please!</span>
      </h1>

      <form>
        <input
          type="text"
          name="username"
          placeholder="select a username"
          className="form-control"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control mt-2"
        />
        <input
          type="password"
          name="confirmPwd"
          placeholder="confirm password"
          className="form-control mt-2"
        />
        <div className="row">
          <button className="form-control mt-2 btn btn-success col ml-3">
            SignUp
          </button>
          <Link to="/login" className="mr-3 ml-5">
            <button className="form-control mt-2 btn btn-danger col">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
