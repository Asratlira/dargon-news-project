import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const AuthLayout = () => {
  return (
    <div className="bg-slate-300">
      <header className="w-11/12 mx-auto font-poppins">
        <NavBar></NavBar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
