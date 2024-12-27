import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Carosel from "./Carosel";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaClock, FaLaptop } from "react-icons/fa6";
import Service from "./Service";

import { useLoaderData } from "react-router-dom";
import Difference from "./Difference";
import Info from "./Info";
import "aos/dist/aos.css"; // Import AOS styles
import { motion } from "framer-motion";

import CountUp from "react-countup";
import { duration } from "moment/moment";

const Home = () => {
  useEffect(() => {
    document.title = "Career Path || Home";
  }, []);
  const loadData = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div className="  ">
      {/* Carousel Section */}
      <div className=" bg-primary w-full rounded-b-[100px]">
        <div className="relative min-h-full  pb-56 flex gap-6 items-center max-w-[1600px] w-11/12 mx-auto justify-center  ">
          <div className="text-white flex-1 pt-7">
            <p className="text-2xl font-semibold">WELCOME TO </p>
            <h1 className="md:text-[80px] lg:text-[90px] font-bold">CAREER PATH</h1>
            <p>Join thousands of learners on their journey to mastering new skills and achieving their goals. Explore courses designed by experts and start learning today!</p>
            <button className="btn mt-7 font-bold hover:bg-green-100">
                Explore Courses
            </button>

          </div>
          <motion.dev
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex items-center  justify-center"
          >
            <div className="h-[800px] w-[800px] border-[3px] border-gray-500  border-dashed flex justify-center items-center  rounded-full">
              <div className="h-[600px] w-[600px] border-gray-500 shadow-xl  border-[3px] border-dashed  rounded-full">

              </div>
            </div>

          </motion.dev>

          <div className="absolute top-46 right-[50px]">
            <motion.img 
             animate={{ y: [0, 30, 0] }}
            transition={{duration:10,repeat:Infinity}}
            className="w-[700px] rounded-lg"
             src="https://i.pinimg.com/736x/bc/71/b3/bc71b3bd0fbbda0ef684376d11c1cf83.jpg" alt=""
            >

            </motion.img>
            {/* <img className="w-[600px] rounded-lg" src="https://i.pinimg.com/736x/bc/71/b3/bc71b3bd0fbbda0ef684376d11c1cf83.jpg" alt="" /> */}
          </div>
          
        </div>
        
      </div>

      <Info></Info>

      <div className="">
        <Service key={loadData.id} data={loadData}></Service>
      </div>
      <div className="">
        <Difference></Difference>
      </div>
    </div>
  );
};

export default Home;
