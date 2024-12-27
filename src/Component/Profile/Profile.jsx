import React, { useContext, useEffect } from "react";
import { AuthUserContext } from "../../FireBase/Provider";
import { FaArrowRight, FaDiamond } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import str from "./str.png";
import { MdOutlineMoodBad } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import UpdateModal from "./UpdateModal";
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
  useEffect(()=>{
    document.title='Career Path || Profile'
  },[])
  const navigate=useNavigate()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  const { user } = useContext(AuthUserContext);
  const { displayName, email, photoURL } = user;

  return (
    <div>
      {/* Profile Header */}
      <div
        data-aos="zoom-in-up"
        className="w-11/12 md:w-9/12 mx-auto my-12 text-white bg-gradient-to-r from-teal-500 to-primary flex flex-col md:flex-row gap-6 md:gap-14 items-center rounded-lg p-6 md:p-14"
      >
        <div className="flex-shrink-0">
          <img
            className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] rounded-lg"
            src={photoURL}
            alt="User Profile"
          />
        </div>
        <div className="text-lg md:text-2xl space-y-4 md:space-y-8 font-bold text-center md:text-left">
          <p>Name: {displayName}</p>
          <p>Email: {email}</p>
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="bg-primary py-2 px-4 rounded-xl outline-white outline"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Encouragement Section */}
      <div
        data-aos="zoom-in-up"
        className="flex flex-col md:flex-row items-center w-11/12 md:w-9/12 mx-auto my-12 bg-gradient-to-r from-teal-500 to-primary p-6 md:p-8 rounded-lg gap-6"
      >
        <div className="w-full text-center md:text-left">
          <p className="text-2xl md:text-4xl font-bold text-white">
            You're doing Excellent! <br />
            <span>Don't lose this track</span>
          </p>
          <p className="text-white text-lg mt-4">
            If you're facing any difficulties, contact our student care team!
          </p>
          <button onClick={()=>navigate('/class')} className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-md mt-4">
            Continue
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="w-full">
          <img
            className="h-[150px] md:h-[200px] lg:h-[250px] w-full object-contain"
            src={str}
            alt="Student Care"
          />
        </div>
      </div>

      {/* Performance and Rewards Section */}
      <div className="w-11/12 md:w-9/12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 my-12">
        {/* Performance Card */}
        <div data-aos="flip-left" className="bg-primary p-6 rounded-lg">
          <div className="flex items-center gap-4 md:gap-6 justify-center">
            <span className="text-orange-500 text-5xl md:text-7xl">
              <MdOutlineMoodBad />
            </span>
            <div>
              <h1 className="text-white font-bold text-xl md:text-2xl">
                Your Performance
              </h1>
              <p className="text-3xl md:text-4xl font-extrabold text-green-400">
                Excellent!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-8 md:mt-12 text-lg md:text-xl">
            <div className="text-white flex items-center justify-between">
              <p>Quiz Avg.</p>
              <div className="border-b-4 rounded-xl w-[150px] md:w-[250px]"></div>
              <p>94%</p>
            </div>
            <div className="text-white flex items-center justify-between mt-4">
              <p>Assignment Avg.</p>
              <div className="border-b-4 rounded-xl w-[150px] md:w-[250px]"></div>
              <p>99%</p>
            </div>
            <div className="text-white flex items-center justify-between mt-4">
              <p>On Time Finish</p>
              <div className="border-b-4 rounded-xl w-[150px] md:w-[250px]"></div>
              <p>66/66</p>
            </div>
          </div>
        </div>

        {/* Rewards Card */}
        <div data-aos="flip-right" className="bg-primary rounded-lg">
          <div className="flex flex-col items-center gap-6 md:gap-9 p-6">
            <span className="text-teal-500 text-7xl md:text-9xl">
              <FaGift />
            </span>
            <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-8">
              <button className="flex items-center gap-2 text-white py-2 px-4 md:px-6 rounded-lg text-lg md:text-2xl font-extrabold bg-teal-500">
                <FaDiamond /> Gems 154
              </button>
              <button className="flex items-center gap-2 text-white py-2 px-4 md:px-6 rounded-lg text-lg md:text-2xl font-extrabold bg-teal-500">
                <FaGift /> Reward 16
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <UpdateModal />
    </div>
  );
};

export default Profile;
