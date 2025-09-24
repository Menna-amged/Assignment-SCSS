import React, { useEffect, useState } from 'react'
import style from "./Home.module.css";
import Meals from '../ِAllMeals/AllMeals';
import Category from '../Category/Category';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AllMeals from '../ِAllMeals/AllMeals';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <>
      <Category />
      <AllMeals/>
    </>
  );
}
