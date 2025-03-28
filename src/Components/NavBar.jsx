import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-3">
        <Link to={"/"}>Home</Link>
        <Link to={"news"}>Carrier</Link>

        <Link to={"news"}>About</Link>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <img src={user} alt="" />
        </div>
        <Link to={"auth/login"} className="btn btn-neutral rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
