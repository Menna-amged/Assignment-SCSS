import React, { useEffect, useState } from 'react'
import style from "./CategoryDetails.module.css";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Category from '../Category/Category';
export default function CategoryDetails() {

 let { categoryName } = useParams();
 const [meals, setmeals] = useState([])

 function getCategoyrDetails(){
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    .then((res) => {
      console.log(res.data.meals);
      setmeals(res.data.meals);
    })
    .catch((err) => console.log(err));
  
 }

 useEffect(()=>{
  getCategoyrDetails()
 },[categoryName])















  return (
    <>
      <Category />
      {meals.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-20">
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <div
              className="meal w-full h-[540px] sm:h-[370px] md:h-[250px] lg:h-[260px]"
            >
              <img
                src={meal.strMealThumb}
                className="mealImage w-full max-w-[420px] sm:max-w-[250px] md:max-w-[130px]  lg:max-w-[150px]"
                alt={meal.strMeal}
              />

              <h3 className="mealTitle py-2">
                {meal.strMeal.split(" ").slice(0, 2).join(" ")}
              </h3>

              <button className="btnMeal">
                <Link to={`/mealdetails/${meal.idMeal}`}>View Recipe</Link>
              </button>
            </div>
          </div>
        ))}
        </div>
      )}
    </>
  );
}
