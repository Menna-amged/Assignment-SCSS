
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
import Contact from './Components/Contact/Contact'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'

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
      { path: "contact", element: <Contact /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },

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
