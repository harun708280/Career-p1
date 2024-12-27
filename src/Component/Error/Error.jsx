import React from "react";
import error from "./A404.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

const Error = () => {
  // const animation = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animated,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };
  const animation = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="min-h-svh flex items-center justify-center flex-col">
      
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
      <Lottie options={animation} className="w-full"></Lottie>
      </div>
     <div className="text-center  w-40 mx-auto   flex justify-center">
     <Link to='/' className="text-center bg-primary hover:bg-primary btn text-white py-2">Go to Home</Link>
     </div>
    </div>
  );
};

export default Error;
