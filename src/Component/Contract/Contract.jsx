import React, { useEffect } from "react";
import { FaLocationDot, FaMagnifyingGlassLocation } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { ReactTyped } from "react-typed";

const Contract = () => {
  useEffect(() => {
    document.title = "Career Path || Contract";
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-20">Contact Us</h1>
        <ReactTyped
          strings={["Get In Touch With Us"]}
          className="md:text-5xl font-extrabold text-primary border-b-4 border-primary"
          typeSpeed={40}
          cursorChar=""
        />
      </div>
      
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <div className="flex items-center space-x-6">
          <div className="bg-primary p-4 rounded-xl text-white text-3xl">
            <IoCall />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Call to ask any question</h1>
            <h1 className="text-2xl md:text-3xl font-extrabold">+0880158467623</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="bg-primary p-4 rounded-xl text-white text-3xl">
            <MdMarkEmailRead />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Email us</h1>
            <h1 className="text-2xl md:text-3xl font-extrabold">info@careerPath.com</h1>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="bg-primary p-4 rounded-xl text-white text-3xl">
            <FaLocationDot />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Visit our office</h1>
            <h1 className="text-2xl md:text-3xl font-extrabold">Dhaka, Bangladesh</h1>
          </div>
        </div>
      </div>

      <div className="my-12 flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="w-full md:w-1/2">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  className="textarea textarea-primary border-primary w-full"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="mt-4">
              <button className="flex items-center text-xl font-bold text-white btn bg-primary hover:bg-primary">
                <span>Send</span>
                <IoIosSend />
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            className="h-[300px] w-full object-cover rounded-lg"
            src="https://86818.cdn.cke-cs.com/32bzTYt9r2A6HeD1ZJBh/images/1a0f6057d6b1c7020f90717ffacb1516170b01d7036f6877.jpeg"
            alt="Contact Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contract;
