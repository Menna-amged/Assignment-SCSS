import React from 'react'
import style from "./Layout.module.scss";
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
export default function Layout() {
  return (
    <>
      <div className="flex flex-col sm:flex-row min-h-screen   ">
        <aside className="w-full sm:w-64 lg:h-screen ">
          <SideBar />
        </aside>

        <div className="container px-8 justify-start  flex-1  my-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
