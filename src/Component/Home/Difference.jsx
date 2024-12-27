import React from "react";
import {
  FaClock,
  FaPeopleGroup,
  FaRegAddressBook,
  FaRegFilePdf,
} from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { GiSunflower } from "react-icons/gi";
const Difference = () => {
  return (
    <div>
      <div className=";g:w-4/12 mx-auto my-12 h-24 text-center">
        <h1 className="text-2xl font-bold ">What Sets Us Apart</h1>
        <ReactTyped
          strings={["Discover the SetMyCareer Difference"]}
          cursorChar=""
          typeSpeed={40}
          backSpeed={30}
          backDelay={2000}
          loop
          className=" md:text-2xl lg:text-4xl font-extrabold text-primary"
        ></ReactTyped>
      </div>
      <div className="mb-12">
        <div className=" grid lg:grid-cols-3 gap-6 grid-rows-2">
          <div  data-aos="fade-right" className="  col-span-1 row-span-1 flex justify-end">
            <div className="text-right space-y-2">
              <button className="bg-primary text-white p-4 rounded-xl text-2xl">
                <FaClock></FaClock>
              </button>
              <h1 className="text-2xl font-bold text-primary">
                15 Years & Going
              </h1>
              <p>
                Unwavering commitment on guiding individuals towards successful
                and fulfilling career paths.
              </p>
            </div>
          </div>
          <div data-aos="fade-down" className="col-span-1 row-span-2 h-full w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/DIFCMtzg7xg?si=yq7HyYwt6sObL-ar"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div  data-aos="fade-left" className="">
            <button className="bg-primary text-white p-4 rounded-xl text-2xl">
              <GiSunflower />
            </button>
            <h1 className="text-2xl font-bold text-primary">
              Experienced Counsellors
            </h1>
            <p>
              Experts dedicated to helping you navigate your career path with
              confidence and clarity.
            </p>
          </div>
          <div data-aos="fade-right" className="  text-right">
            <button className="bg-primary text-white p-4 rounded-xl text-2xl">
              <FaRegFilePdf></FaRegFilePdf>
            </button>
            <h1 className="text-2xl font-bold text-primary">
              International Assessments
            </h1>
            <p>
              Offering exceptional career guidance through our specialized
              Psychometric Assessments.
            </p>
          </div>
          <div  data-aos="fade-left" className="">
            <button className="bg-primary text-white p-4 rounded-xl text-2xl">
              <FaPeopleGroup></FaPeopleGroup>
            </button>
            <p className="text-2xl font-bold text-primary">
              Personalized 1:1 Approach
            </p>
            <p>
              One-size-fits-all approach doesn't work when it comes to choosing
              ideal career paths.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
