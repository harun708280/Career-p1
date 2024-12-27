import React, { useContext, useEffect, useState } from "react";
import { ModuleContext } from "../../LayOut/LayOut";
import Video from "./Video";

const Class = () => {
  useEffect(() => {
    document.title = "Career Path || Class";
  }, []);
  const { module } = useContext(ModuleContext);


  const [dataMain, setData] = useState([]);
  

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("/Module.json");
      const moduleData = await res.json();
     
      const findData = moduleData.find((item) => item.id === module.id);

      setData(findData ? findData.videos : []);
    };
    

    dataFetch();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      {dataMain.length === 0 ? (
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800">
            Class Video Not Available
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-600 mt-4">
            We apologize, but the video you are looking for is not available at
            the moment.
          </p>
          <p className="text-md md:text-3xl font-bold w-8/12 mx-auto mt-4">
            Please make sure that you are enrolled in the class and that the
            video has been published. If you are facing any other issues, you
            may want to:
          </p>
          <ul className="md:text-xl sm:text-lg  font-bold mt-4">
            <li>
              - Visit the <strong>Home</strong> page to explore other services
              and classes.
            </li>
            <li>
              - Go to the <strong>Service Explore</strong> page to see more
              offerings.
            </li>
            <li>
              - <strong>Enroll</strong> in the class to access videos and other
              resources.
            </li>
          </ul>
          <p className="text-md sm:text-lg text-gray-500 mt-4">
            If you need help or support, feel free to{" "}
            <strong>contact us</strong> or visit our{" "}
            <strong>FAQ section</strong>.
          </p>
        </div>
      ) : (
        <div className="">
          <h1 className="text-4xl mt-7 font-bold">
            {module.course} (Batch-10)
          </h1>
          <div className=" md:grid-cols-2 lg:grid-cols-3  grid gap-16 my-12">
            {dataMain.map((video) => (
              <Video video={video.link}></Video>
            ))}
          </div>
        </div>
      )}
      <div className="">
        <div></div>
      </div>
    </div>
  );
};

export default Class;
