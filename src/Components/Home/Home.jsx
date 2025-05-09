import React, { useEffect, useState } from 'react'
import style from "./Home.module.scss";
import Meals from '../ِAllMeals/AllMeals';
import Category from '../Category/Category';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AllMeals from '../ِAllMeals/AllMeals';
export default function Home() {


  return (
    <>
      <Category />
    <AllMeals/>
    </>
  );
}
