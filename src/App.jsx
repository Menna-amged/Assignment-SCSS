
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Category from './Components/Category/Category'
import MealDetails from './Components/MealDetails/MealDetails'
import NotFound from './Components/NotFound/NotFound'
import CategoryDetails from './Components/CategoryDetails/CategoryDetails'
import AllMeals from './Components/ِAllMeals/AllMeals'

function App() {
 

let x = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "category", element: <Category /> },
      { path: "allmeals", element: <AllMeals /> },

      { path: "/category/:categoryName", element: <CategoryDetails /> },
      { path: "/mealdetails/:mealId", element: <MealDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);





  return <RouterProvider router={x}></RouterProvider>
}

export default App
