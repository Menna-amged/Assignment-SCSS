import React, { useEffect, useState } from 'react'
import style from "./AllMeals.module.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllMeals() {
   const [allMeals, setallMeals] = useState([]);

   function getAllMeals() {
     return axios
       .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
       .then((res) => {
         setallMeals(res.data.meals);
         console.log(res.data.meals);
       })
       .catch((err) => console.log(err));
   }

   useEffect(() => {
     getAllMeals();
   }, []);



  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-20">
        {allMeals.map((meal) => (
          <div key={meal.idMeal}>
            <div
              className={`${style.meal} w-full h-[540px]  sm:h-[370px] md:h-[250px]  lg:h-[280px] `}
            >
              <img
                src={meal.strMealThumb}
                className={`${style.mealImage} w-full max-w-[420px] sm:max-w-[250px] md:max-w-[130px]  lg:max-w-[150px] `}
                alt={meal.strMeal}
              />

              <h3 className={style.mealTitle}>
                {meal.strMeal.split(" ").slice(0, 2).join(" ")}
              </h3>
              <h5 className={style.mealCountry}>
                <i className="fa-solid fa-earth-americas me-2"></i>
                {meal.strArea}
              </h5>

              <button className={style.btnMeal}>
                <Link to={`/mealdetails/${meal.idMeal}`}>View Recipe</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

   
    </>
  );
}
