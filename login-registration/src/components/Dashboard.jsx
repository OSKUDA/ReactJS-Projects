import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  if (token === null) {
    return (
      <div className="form-container vertical-center">
        <form>
          <h1>You are not authenticated. Token=&quot;&quot;</h1>
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
  } else {
    return (
      <div>
        <div className="form-container vertical-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1>
              You are authenticated. Token={`${token.substring(0, 6)}...`}
            </h1>
            <br />
            <br />

            <br />
          </form>
        </div>
        <div className="button sign-out-button">
          <button>Secure API</button>
        </div>
        <div className="button sign-out-button">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }
};
export default Dashboard;
