import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(email, name, photo, password);
    createUser(email, password)
      .then((result) => {
        setUser(user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massege);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen font-poppins">
      <div className="card bg-base-100  max-w-lg p-10 gap-3">
        <form className="card-body " onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl mb-4">Register your account</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-url</span>
            </label>
            <input
              type="text"
              placeholder="photo-url"
              className="input input-bordered"
              required
              name="photo"
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
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
          <p>
            Already have an account
            <Link className="text-red-500 " to={"/auth/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
