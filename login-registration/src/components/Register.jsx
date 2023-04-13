import { useState } from "react";
import { Link } from "react-router-dom";
import validateEmailPassword from "../utils/validateEmailPassword";
import validateFirstAndLastName from "../utils/validateFirstAndLastName";
const Register = () => {
  const [requestParams, setRequestParams] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  return (
    <div className="form-container vertical-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            email: formData.get("email") ?? "",
            password: formData.get("password") ?? "",
            firstName: formData.get("firstName") ?? "",
            lastName: formData.get("lastName") ?? "",
          };
          // input validation
          const validObj = {
            emailAndPassword: validateEmailPassword(obj.email, obj.password),
            firstAndLastName: validateFirstAndLastName(
              obj.firstName,
              obj.lastName
            ),
          };
          setEmailError(!validObj.emailAndPassword.email);
          setPasswordError(!validObj.emailAndPassword.password);
          setFirstNameError(!validObj.firstAndLastName.firstName);
          setLastNameError(!validObj.firstAndLastName.lastName);
          if (
            validObj.emailAndPassword.email &&
            validObj.emailAndPassword.password
          ) {
            setRequestParams(obj);
          }
        }}
      >
        <h1 className="center">Register</h1>
        <br />
        <br />
        <label htmlFor="firstName">
          First Name:{" "}
          {firstNameError ? (
            <span className="error-message">* first name is empty</span>
          ) : null}
          <input name="firstName" id="firstName" placeholder="first name" />
        </label>
        <label htmlFor="lastName">
          Last Name:{" "}
          {lastNameError ? (
            <span className="error-message">* last name is empty</span>
          ) : null}
          <input name="lastName" id="lastName" placeholder="last name" />
        </label>
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
          already have an account? <Link to={"/login"}>sign-in here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
