import React from "react";

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
        <button className="form-control mt-2 btn btn-success">SignUp</button>
      </form>
    </div>
  );
}
export default SignUp;
