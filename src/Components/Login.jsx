import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen font-poppins">
      <div className="card bg-base-100  max-w-lg p-10 gap-3">
        <form className="card-body">
          <div className="form-control">
            <h1 className="text-center text-2xl mb-4">Login your account</h1>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <p>
            dont have an account{" "}
            <Link className="text-red-500 " to={"/auth/register"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
