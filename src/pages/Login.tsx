import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <img src="/img/logo.png" alt="Logo" className="auth-logo" />
        <h3 className="mb-3">Login</h3>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-outline-light px-5 brand">
            Login
          </button>
        </form>
        <div className="mt-3">
          Don’t have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
