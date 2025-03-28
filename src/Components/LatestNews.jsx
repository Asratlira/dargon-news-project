import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 gap-3">
      <p className="bg-[#D72050] py-2 px-3 text-base-100">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to={"news"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          animi.
        </Link>
        <Link to={"news"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          animi.
        </Link>
        <Link to={"news"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          animi.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
