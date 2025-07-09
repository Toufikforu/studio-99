import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <img src="/img/logo.png" alt="Logo" className="auth-logo" />
        <h3 className="mb-3">Register</h3>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
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
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-outline-light px-5 brand">
            Register
          </button>
        </form>
        <div className="mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
