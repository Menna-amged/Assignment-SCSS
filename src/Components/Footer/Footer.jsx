import React from 'react'
import style from "./Footer.module.scss";
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <footer className="bg-white  mx-auto p-5  z-[55] relative ">
        <div className="flex flex-col sm:flex-row  justify-between  ">
          <div className="flex items-center gap-2">
            <img className="w-16" src={logo} alt="logo" />
            <p className="text-2xl font-semibold">Recipe</p>
          </div>
          <p className="text-2xl font-semibold text-blue-700">Route</p>
        </div>
        <hr className="my-5 border-gray-300 sm:mx-auto " />

        <p className="text-gray-500 text-sm text-center">
          © 2025
          <Link
            to="https://www.facebook.com/EINagy"
            className="hover:underline "
          >
            {" "}
            Nagy Osama™
          </Link>
          . All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
