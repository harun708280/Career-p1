import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

import { PiUsersThreeFill } from "react-icons/pi";
import { FaClock, FaLaptop } from "react-icons/fa6";

import CountUp from "react-countup";

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="my-7 px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {/* Happy Clients */}
        <div
          data-aos="fade-right"
          className="bg-[#091E3E] py-10 text-center flex space-x-4 justify-center items-center text-white  shadow-lg"
        >
          <p
            aria-label="Happy Clients Icon"
            className="bg-white py-4 px-5 rounded-xl text-[#091E3E] text-3xl"
          >
            <PiUsersThreeFill />
          </p>
          <div className="text-left">
            <p className="text-2xl font-bold">Happy Clients</p>
            <p className="text-3xl font-bold">
              <CountUp start={1} end={6024} duration={2} />
            </p>
          </div>
        </div>

        {/* Hours of Counselling */}
        <div
          data-aos="fade-up"
          className="bg-green-100 py-7 text-center flex space-x-4 justify-center items-center  shadow-lg"
        >
          <p
            aria-label="Hours of Counselling Icon"
            className="bg-[#091E3E] py-4 px-5 rounded-xl text-white text-3xl"
          >
            <FaClock />
          </p>
          <div className="text-left">
            <p className="text-2xl font-bold">Hours of Counselling</p>
            <p className="text-3xl font-bold">
              <CountUp start={1} end={101780} duration={2.5} />
            </p>
          </div>
        </div>

        {/* Tests Taken */}
        <div
          data-aos="fade-left"
          className="bg-[#091E3E] py-7 text-center flex space-x-4 justify-center items-center text-white  shadow-lg"
        >
          <p
            aria-label="Tests Taken Icon"
            className="bg-white py-4 px-5 rounded-xl text-[#091E3E] text-3xl"
          >
            <FaLaptop />
          </p>
          <div className="text-left">
            <p className="text-2xl font-bold">Tests Taken</p>
            <p className="text-3xl font-bold">
              <CountUp start={1} end={71537} duration={2.5} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
