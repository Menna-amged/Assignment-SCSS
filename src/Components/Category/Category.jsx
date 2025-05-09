import React, { useEffect, useState } from 'react'
import style from "./Category.module.scss";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




export default function Category({ onCategorySelect }) {
  const [categories, setcategories] = useState([]);
  const [active, setactive] = useState("All");
  const navigate = useNavigate();
  function getCategories() {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
      .then((res) => {
        console.log(res);
       
        setcategories(res.data.meals);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getCategories();
  }, []);

function handleCategoryClick(categoryName) {
  setactive(categoryName);
  if (categoryName === "All") {
    navigate("/");
  } else {
    navigate(`/category/${categoryName}`);
  }

  onCategorySelect &&
    onCategorySelect(categoryName === "All" ? "" : categoryName);
}

  return (
    <>
      <div className="border-b border-gray-200">
        <h1 className=" text-4xl font-extrabold  my-5 bg-gradient-to-r from-orange-400   via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent">
          Learn, Cook, Eat Your Food
        </h1>
        <div className="sm:hidden">
          <select
            className="w-full border border-gray-300 bg-slate-50 rounded-lg p-2 text-lg"
            name="tabs"
            id="tabs"
            value={active}
            onChange={(e) => handleCategoryClick(e.target.value)}
          >
            {categories.map((category) => (
              <>
                <option key={category.idCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              </>
            ))}
          </select>
        </div>
        <ul className="hidden sm:flex flex-wrap gap-5  my-4">
          <li
            className={`${style.btnCategory} ${active === "All" ? style.active : ""}`}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category.idCategory}
              className={`${style.btnCategory} ${
                active === category.strCategory ? style.active : ""
              }`}
              onClick={() => handleCategoryClick(category.strCategory)}
            >
              {category.strCategory}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
