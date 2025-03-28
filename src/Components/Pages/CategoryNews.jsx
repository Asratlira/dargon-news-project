import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../SingleCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="font-semibold mb-2">Dragon News Home</h2>
      <div>
        {news.map((singleNews) => (
          <SingleCard key={"singleNews._id"} news={singleNews}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
