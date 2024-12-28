import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Service = ({ data }) => {
 

  return (
    <div>
      <div className="lg:w-6/12 mx-auto text-center my-12">
        <h1 className="text-2xl text-primary font-bold"> Our Services</h1>
        <ReactTyped
          className="text-xl md:text-3xl lg:text-5xl font-extrabold text-primary"
          strings={["Empower Your Career Journey for Greater Success"]}
          typeSpeed={30}
          cursorChar=""
        ></ReactTyped>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7 ">
        {data.map((item) => (
          <div className="bg-green-100 shadow-lg flex flex-col p-12 rounded-lg">
            <div className="">
              <img className="h-52 w-full rounded-xl" src={item.image} alt="" />
            </div>
            <div className="mt-12">
                <div className="flex justify-between space-x-4">
                <p className="text-xl  font-extrabold items-center">{item.serviceName}</p>
                <div class="badge badge-secondary">{item.category}</div>
                
                </div>
                <div className="flex justify-between text-lg font-semibold">
                    
                    <p> Counselor: {item.counselor}</p>
                    <p>{item.pricing}</p>
                </div>
                <div className="mt-4">
                   <Link to={`/details/${item.slug}`}> <button className="flex rounded-lg items-center space-x-4 bg-primary py-1 px-4 text-white"><span>Learn More</span> <span><FaArrowRight></FaArrowRight></span></button></Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
