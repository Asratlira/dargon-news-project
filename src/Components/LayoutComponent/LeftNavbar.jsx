import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <div className="font-semibold py-3">
        <h1>All Category</h1>
      </div>
      <div className="flex-col flex gap-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
        ;
      </div>
    </div>
  );
};

export default LeftNavbar;
