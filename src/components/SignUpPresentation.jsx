import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function SignUp({ inputValidation, userSignUp, userNameStatus }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [doesPasswordsMatch, setPasswordMatch] = useState(true);
  const [userNameTaken, setNameTaken] = useState("");

  function signUp(e) {
    e.preventDefault();
    userSignUp(username, password);
  }
  useEffect(() => {
    //console.log("trigger useeffect");
    if (username !== "") {
      inputValidation(username);
    }
    //console.log("usernamestatus--", userNameStatus);
    userNameStatus === "USER_NAME_TAKEN"
      ? setNameTaken(true)
      : setNameTaken(false);
    setPasswordMatch(password === confirmPassword);
  }, [username, password, confirmPassword, userNameStatus]);

  return (
    <div className="card col-6 mt-4">
      <h1>
        <span className="badge badge-dark mt-2">Few Details Please!</span>
      </h1>

      <form onSubmit={signUp}>
        <input
          type="text"
          name="username"
          placeholder="select a username"
          className="form-control"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        {userNameTaken ? (
          <span className="badge badge-danger mt-2">username taken</span>
        ) : userNameStatus === undefined ? (
          ""
        ) : (
          <span className="badge badge-success mt-2">username valid</span>
        )}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          className="form-control mt-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPwd"
          placeholder="confirm password"
          value={confirmPassword}
          className="form-control mt-2"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {doesPasswordsMatch ? (
          <span className="badge badge-success mt-2">passwords match</span>
        ) : (
          <span className="badge badge-danger mt-2">passwords don't match</span>
        )}
        <div className="row">
          <button className="form-control mt-2 btn btn-success col ml-3">
            SignUp
          </button>
          <Link to="/" className="mr-3 ml-5">
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
