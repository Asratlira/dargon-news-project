import React from "react";
import { FaFacebook } from "react-icons/fa";

const FindOnUs = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Find On us</h2>
      <div className="join  *:bg-base-100 join-vertical flex">
        <button className="btn justify-start join-item">
          <FaFacebook></FaFacebook>FaceBook
        </button>
        <button className="btn justify-start join-item">
          <FaFacebook></FaFacebook>FaceBook
        </button>
        <button className="btn justify-start join-item">
          <FaFacebook></FaFacebook>FaceBook
        </button>
      </div>
    </div>
  );
};

export default FindOnUs;
