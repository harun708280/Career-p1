import React from "react";
import { useNavigate } from "react-router-dom";

const Carosel = () => {
  const navigate = useNavigate();

  return (
    <div className="my-7">
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full rounded-xl overflow-hidden">
          <div className="bg-cover bg-custom-bg1 bg-center w-full flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#091E3E] to-[#091E3E] via-transparent"></div>

            <div className="flex flex-col justify-center items-center z-10 relative">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">Career Counseling</h2>
              <p className="text-white text-base sm:text-lg md:text-xl">
                Get personalized guidance for your career path.
              </p>
              <button
                onClick={() => navigate("details/career-counseling-sessions")}
                className="mt-4 px-6 py-2 bg-[#091E3E] text-white border rounded-lg hover:bg-[#0a2a4c]"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide3" className="btn btn-circle bg-white text-black">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-white text-black">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full rounded-xl overflow-hidden">
          <div className="bg-cover bg-custom-bg2 bg-center flex items-center justify-center w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#091E3E] via-transparent to-transparent"></div>
            <div className="flex flex-col items-center z-10 relative">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Resume Review</h2>
              <p className="text-white text-base sm:text-lg md:text-xl">
                Get expert feedback on your resume for better career opportunities.
              </p>
              <button
                onClick={() => navigate("/details/resume-review")}
                className="mt-4 px-6 py-2 bg-[#091E3E] text-white rounded-lg hover:bg-[#0a2a4c]"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide1" className="btn btn-circle bg-white text-black">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white text-black">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full rounded-xl overflow-hidden">
          <div className="bg-cover bg-custom-bg3 flex items-center justify-center bg-center w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#091E3E] via-transparent to-transparent"></div>
            <div className="flex flex-col items-center z-10 relative">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Interview Preparation</h2>
              <p className="text-white text-base sm:text-lg md:text-xl">
                Prepare with mock interviews and expert tips to land your dream job.
              </p>
              <button
                onClick={() => navigate("details/interview-coaching")}
                className="mt-4 px-6 py-2 bg-[#091E3E] text-white rounded-lg hover:bg-[#0a2a4c]"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
            <a href="#slide2" className="btn btn-circle bg-white text-black">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-white text-black">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
