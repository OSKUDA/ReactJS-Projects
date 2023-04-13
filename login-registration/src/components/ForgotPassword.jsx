import { useState } from "react";
import { Link } from "react-router-dom";
import validateEmailPassword from "../utils/validateEmailPassword";
const ForgotPassword = () => {
  const [emailError, setEmailError] = useState(false);
  const [requestParams, setRequestParams] = useState({
    email: "",
  });
  return (
    <div className="form-container vertical-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            email: formData.get("email") ?? "",
          };
          // input validation
          const validObj = {
            emailAndPassword: validateEmailPassword(obj.email),
          };
          setEmailError(!validObj.emailAndPassword.email);
          if (validObj.emailAndPassword.email) {
            setRequestParams({
              email: true,
            });
          }
        }}
      >
        <h1 className="center">Reset Password</h1>
        <br />
        <br />
        <label htmlFor="email">
          Email:{" "}
          {emailError ? (
            <span className="error-message">* email is invalid</span>
          ) : null}
          <input name="email" id="email" placeholder="email" />
        </label>

        <div className="button center">
          <button>Reset</button>
        </div>
        <br />
        <br />
        <hr />
        <p>
          already have an account? <Link to={"/login"}>sign-in here</Link>
        </p>
        <p>
          don&apos;t have an account?{" "}
          <Link to={"/register"}>register here</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
