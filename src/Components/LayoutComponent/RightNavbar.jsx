import React from "react";
import SocialLogin from "../SocialLogin";
import FindOnUs from "../FindOnUs";

const RightNavbar = () => {
  return (
    <div className="space-y-2 ">
      <SocialLogin></SocialLogin>
      <FindOnUs></FindOnUs>
    </div>
  );
};

export default RightNavbar;
