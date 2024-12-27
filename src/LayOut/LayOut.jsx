import React, { createContext, useState } from "react";
import Nav from "../Component/Header/Nav";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Component/Header/Footer";
import { Toaster } from "react-hot-toast";

export const ModuleContext=createContext(null)
const LayOut = () => {
  const [module,setModule]=useState(null)
  const info={
    module,
    setModule,
  }
  
  
  return (
    <div>
      <Toaster></Toaster>
      <ScrollRestoration></ScrollRestoration>
      <ModuleContext.Provider value={info}>
      <div className="md:fixed md:right-0 md:left-0 top-0 z-50">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-200px)] md:pt-[75px] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      </ModuleContext.Provider>
    </div>
  );
};

export default LayOut;
