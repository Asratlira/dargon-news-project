import React from "react";
import logo from "../assets/logo.png";
import moment from "moment/moment";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col py-3 gap-2">
      <div className="w-[300px]">
        <img src={logo} alt="" />
      </div>
      <h2 className="text-gray-500">Journalism Without Fear or Favour</h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
