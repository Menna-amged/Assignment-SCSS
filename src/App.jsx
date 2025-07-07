
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Category from './Components/Category/Category'
import MealDetails from './Components/MealDetails/MealDetails'
import NotFound from './Components/NotFound/NotFound'
import CategoryDetails from './Components/CategoryDetails/CategoryDetails'
import AllMeals from './Components/ِAllMeals/AllMeals'
import Ingredients from './Components/Ingredients/Ingredients'
import IngredientDetails from './Components/IngredientDetails/IngredientDetails'
import Areas from './Components/Areas/Areas'
import AreaDetails from './Components/AreaDetails/AreaDetails'

function App() {
 

let x = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category", element: <Category /> },
      { path: "allmeals", element: <AllMeals /> },
      { path: "ingredients", element: <Ingredients /> },
      { path: "areas", element: <Areas /> },

      { path: "/category/:categoryName", element: <CategoryDetails /> },
      { path: "/mealdetails/:mealId", element: <MealDetails /> },
      { path: "/ingredient/:ingredientName", element: <IngredientDetails /> },
      { path: "/area/:areaName", element: <AreaDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);





  return <RouterProvider router={x}></RouterProvider>
}

export default App
