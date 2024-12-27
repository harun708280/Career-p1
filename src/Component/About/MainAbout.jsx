import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import animated from "./animation.json";
import Lottie from "react-lottie";
import CountUp from "react-countup";
import { SiTransmission } from "react-icons/si";
import { PiTelevisionFill, PiUsersThreeFill } from "react-icons/pi";
import { MdLocalOffer } from "react-icons/md";
import { FaHistory, FaClock, FaLaptop } from "react-icons/fa";

const MainAbout = () => {
  useEffect(()=>{
    document.title='Career Path || About'

  },[])
  const animation = {
    loop: true,
    autoplay: true,
    animationData: animated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
      {/* About Section */}
      <div data-aos="zoom-in-up" className="md:flex flex-wrap items-center ">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            At Career Path, we are dedicated to helping individuals navigate
            their journey toward a successful and fulfilling career. Whether
            you’re a student exploring options or a professional seeking a
            change, our platform provides the tools and resources you need to
            make informed decisions.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Lottie options={animation} height="10%" width="60%" />
        </div>
      </div>

      {/* Counters Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  my-12">
        {/* Happy Clients */}
        <div
          data-aos="fade-right"
          className="bg-[#091E3E] py-8 px-4 text-center flex space-x-4 justify-center items-center text-white "
        >
          <p className="bg-white py-4 px-5 rounded-xl text-[#091E3E] text-3xl">
            <PiUsersThreeFill />
          </p>
          <div className="text-left">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold">Happy Clients</p>
            <p className="text-2xl sm:text-3xl font-bold">
              <CountUp start={1} end={6024}></CountUp>
            </p>
          </div>
        </div>

        {/* Hours of Counselling */}
        <div
          data-aos="fade-up"
          className="bg-green-100 py-8 px-4 text-center flex space-x-4 justify-center items-center "
        >
          <p className="bg-[#091E3E] py-4 px-5 rounded-xl text-white text-3xl">
            <FaClock />
          </p>
          <div className="text-left">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold">Hours of Counselling</p>
            <p className="text-2xl sm:text-3xl font-bold">
              <CountUp start={1} end={101780}></CountUp>
            </p>
          </div>
        </div>

        {/* Tests Taken */}
        <div
          data-aos="fade-left"
          className="bg-[#091E3E] py-8 px-4 text-center flex space-x-4 justify-center items-center text-white "
        >
          <p className="bg-white py-4 px-5 rounded-xl text-[#091E3E] text-3xl">
            <FaLaptop />
          </p>
          <div className="text-left">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold">Tests Taken</p>
            <p className="text-2xl sm:text-3xl font-bold">
              <CountUp start={1} end={71537}></CountUp>
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        <div
          data-aos="zoom-in-up"
          className="bg-green-100 text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex justify-center items-center mb-4">
            <span className="text-primary text-4xl">
              <SiTransmission />
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Our Mission</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            Our mission is simple: To empower people with knowledge, guidance,
            and confidence to choose the right career path and achieve their
            dreams.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="bg-green-100 text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex justify-center items-center mb-4">
            <span className="text-primary text-4xl">
              <PiTelevisionFill />
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Our Vision</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            We envision a world where everyone has access to expert advice and
            resources to build a career they love and thrive in.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="bg-green-100 text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex justify-center items-center mb-4">
            <span className="text-primary text-4xl">
              <MdLocalOffer />
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-primary mb-2">What We Offer</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            Comprehensive Career Guidance: Explore various career options with
            detailed insights. Personalized Recommendations: Get tailored
            advice based on your skills, interests, and goals.
          </p>
        </div>
      </div>

      {/* Additional Cards Section */}
      <div className="grid grid-cols-1 lg:w-9/12 mx-auto sm:grid-cols-2 gap-8 my-12">
        <div
          data-aos="zoom-in-up"
          className="bg-green-100 text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex justify-center items-center mb-4">
            <span className="text-primary text-4xl">
              <FaHistory />
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Our Story</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            Career Path started with a simple idea in 2024: To make career
            counseling accessible to everyone. Over time, we’ve grown into a
            trusted platform for thousands of users, helping them make confident
            and informed choices about their future.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="bg-green-100 text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex justify-center items-center mb-4">
            <span className="text-primary text-4xl">
              <SiTransmission />
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Who We Are</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            We are a passionate team of career counselors, industry experts, and
            educators committed to your success. With years of experience in
            education and career guidance, we aim to bring clarity and direction
            to your professional goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
