import React, { useEffect } from 'react'
import style from "./SideBar.module.css";
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { initDrawers } from 'flowbite';

export default function SideBar() {


  useEffect(() => {
  initDrawers(); 
}, []);
  return (
    <>
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="flex items-start p-2 mt-2 ms-3 text-md text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <aside
          id="default-sidebar"
          className="   fixed top-0 left-0 z-40  bg-slate-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto ">
            <ul className="space-y-2 ">
              <li className=" pb-5">
                <Link to="/" className="flex items-center p-2 rounded-l ">
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li className=" pb-5">
                <Link
                  to="/"
                  className="flex items-center py-2 px-8 shadow-orange-300 shadow-lg text-white hover:shadow-xl hover:shadow-orange-50 transition-all hover:scale-105   duration-300 rounded-xl font-semibold text-lg bg-amber-500 "
                >
                  <i className="fa-solid fa-utensils"></i>
                  <span className="ms-3 ">Meals</span>
                </Link>
              </li>
              <li className=" pb-5">
                <Link
                  to="/ingredients"
                  className="flex items-center py-2 px-8 hover:scale-105  hover:shadow-xl hover:shadow-orange-50 transition-all  bg-transparent border border-gray-300  rounded-xl font-semibold text-lg "
                >
                  <i className="fa-solid fa-carrot"></i>
                  <span className="ms-3 ">Ingredients</span>
                </Link>
              </li>
              <li className=" pb-5">
                <Link
                  to="/areas"
                  className="flex items-center py-2 px-8 hover:scale-105  hover:shadow-xl hover:shadow-orange-50 transition-all  bg-transparent border border-gray-300  rounded-xl font-semibold text-lg "
                >
                  <i className="fa-solid fa-earth-americas"></i>
                  <span className="ms-3 ">Areas</span>
                </Link>
              </li>
              <li className=" pb-5">
                <Link
                  to="/contact"
                  className="flex items-center py-2 px-8 hover:scale-105  hover:shadow-xl hover:shadow-orange-50 transition-all  bg-transparent border border-gray-300  rounded-xl font-semibold text-lg "
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span className="ms-3 ">Contact</span>
                </Link>
              </li>
              
              {/* Authentication Section */}
              <li className="pb-5">
                <div className="border-t border-gray-200 my-4"></div>
              </li>
              
              <li className="pb-5">
                <Link
                  to="/signin"
                  className="flex items-center py-2 px-8 hover:scale-105 hover:shadow-xl hover:shadow-green-50 transition-all bg-transparent border border-gray-300 rounded-xl font-semibold text-lg"
                >
                  <i className="fa-solid fa-sign-in-alt"></i>
                  <span className="ms-3">Sign In</span>
                </Link>
              </li>
              
              <li className="pb-5">
                <Link
                  to="/signup"
                  className="flex items-center py-2 px-8 hover:scale-105 hover:shadow-xl hover:shadow-blue-50 transition-all bg-transparent border border-gray-300 rounded-xl font-semibold text-lg"
                >
                  <i className="fa-solid fa-user-plus"></i>
                  <span className="ms-3">Sign Up</span>
                </Link>
              </li>
              
              <li className="pb-5">
                <button
                  onClick={() => {
                    // Here you would typically handle sign out logic
                    alert('Signed out successfully!');
                  }}
                  className="flex items-center py-2 px-8 hover:scale-105 hover:shadow-xl hover:shadow-red-50 transition-all bg-transparent border border-gray-300 rounded-xl font-semibold text-lg w-full text-left"
                >
                  <i className="fa-solid fa-sign-out-alt"></i>
                  <span className="ms-3">Sign Out</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );

 
}
