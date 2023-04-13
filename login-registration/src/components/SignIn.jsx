import { useState } from "react";
import { Link } from "react-router-dom";
import validateEmailPassword from "../utils/validateEmailPassword";
const SignIn = () => {
  const [requestParams, setRequestParams] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <div className="signin-container vertical-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            email: formData.get("email") ?? "",
            password: formData.get("password") ?? "",
          };
          // input validation
          const validObj = validateEmailPassword(obj.email, obj.password);
          if (validObj.email && validObj.password) {
            setRequestParams(obj);
          }
          if (!validObj.email) {
            setEmailError(true);
          } else {
            setEmailError(false);
          }
          if (!validObj.password) {
            setPasswordError(true);
          } else {
            setPasswordError(false);
          }
        }}
      >
        <h1 className="center">Sign-In</h1>
        <br />
        <br />
        <label htmlFor="email">
          Email:{" "}
          {emailError ? (
            <span className="error-message">* email is invalid</span>
          ) : null}
          <input name="email" id="email" placeholder="email" />
        </label>
        <label htmlFor="password">
          Password:{" "}
          {passwordError ? (
            <span className="error-message">* password is invalid</span>
          ) : null}
          <input
            name="password"
            type="password"
            id="password"
            placeholder="password"
          />
        </label>
        <div className="button center">
          <button>Login</button>
        </div>
        <br />
        <br />
        <hr />
        <p>
          don&apos;t have an account? <Link to={"register"}>Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
