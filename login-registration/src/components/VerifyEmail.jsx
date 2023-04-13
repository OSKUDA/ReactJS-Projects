import { useState } from "react";
import { Link } from "react-router-dom";
import validateEmailVerificationUrl from "../utils/validateEmailVerificationUrl";
const VerifyEmail = () => {
  const [urlError, setUrlError] = useState(false);
  return (
    <div className="form-container vertical-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            url: formData.get("verification-url") ?? "",
          };
          // input validation
          const validObj = {
            url: validateEmailVerificationUrl(obj.url),
          };
          setUrlError(!validObj.url);
          if (validObj.url) {
            // do some work
            console.log("url is valid, ok to send request");
          }
        }}
      >
        <h1 className="center">Verify Email</h1>
        <br />
        <br />
        <label htmlFor="verification-url">
          Verification URL{" "}
          {urlError ? (
            <span className="error-message">* url is empty</span>
          ) : null}
          <input
            name="verification-url"
            id="verification-url"
            placeholder="paste your verification link"
          />
        </label>

        <div className="button center">
          <button>Verify</button>
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

export default VerifyEmail;
