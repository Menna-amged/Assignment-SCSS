import React, { useEffect } from 'react'
import style from "./MealDetails.module.scss";
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
export default function MealDetails() {

const [mealdetails, setmealdetails] = useState(null)
let{mealId}= useParams()
function getDetailsMeal(id) {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      setmealdetails(res.data.meals?.[0]);
      console.log(res.data.meals?.[0]);
    })
    .catch((err) => console.log(err));
}
useEffect(()=>{
  getDetailsMeal(mealId);
},[mealId])



  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 pb-5">
        <div className="lg:w-2/3">
          <h1 className="text-5xl font-extrabold  my-5">
            {mealdetails?.strMeal}
          </h1>
          <div className="flex  flex-col lg:flex-row justify-between items-start gap-4">
            <div className=" w-full lg:w-1/2">
              <img
                src={mealdetails?.strMealThumb}
                alt={mealdetails?.strMealThumb}
                className={style.image}
              />
              <ul className={style.buttons}>
                <li className={style.btn1}>
                  <a href={mealdetails?.strYoutube} target="_blank"  >
                    {" "}
                    <i className="fa-brands fa-youtube me-2"></i>
                    Youtube
                  </a>
                </li>
                <li className={style.btn2}>
                  <a href={mealdetails?.strSource} target="_blank">
                    <i className="fa-solid fa-globe me-2"></i>
                    Source
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <p>{mealdetails?.strInstructions}</p>
            </div>
          </div>
        </div>

        <div className=" lg:w-1/3 p-4">
          <div className={style.card}>
            <h3 className="text-2xl p-2 font-extrabold border-b-4 border-gray-200  ">
              Ingredients
            </h3>
            <div className="ing p-2">
              <ul>
                {Object.keys(mealdetails || {})
                  .filter(
                    (key) => key.startsWith("strIngredient") && mealdetails[key]
                  )
                  .map((key, index, array) => {
                    const ingredient = mealdetails[key];
                    const measure = mealdetails[`strMeasure${index + 1}`];
                    const isLast = index === array.length - 1;
                    return (
                      <li
                        key={index}
                        className={`flex justify-between py-1 ${
                          !isLast ? "border-b-2 border-gray-200" : ""
                        }`}
                      >
                        <span className="font-medium py-1">{ingredient}:</span>
                        <span>{measure}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
