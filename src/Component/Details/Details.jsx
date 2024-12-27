import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa6';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import AOS from "aos";
import "aos/dist/aos.css";
import Optional from './Optional';
import D1 from './d1.webp'
import D2 from './d2.png'
import D3 from './d4.webp'
import EnrollModal from './EnrollModal';

const Details = () => {
    useEffect(()=>{
        document.title=' Career Path || Details Service'
    })
    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 200,
        });
      }, []);
    const loadData = useLoaderData();
    
    const {id, image, serviceName, category, description, pricing, duration, counselor, rating, icon} = loadData;
    const name = serviceName;

    return (
        <div className='max-w-full lg:max-w-[1600px] mx-auto px-4'>
            {/* Main Details */}
            <div data-aos="zoom-in-up" className="w-full lg:w-10/12 p-4 items-center mx-auto my-12 bg-primary text-white rounded-lg flex flex-col lg:flex-row gap-6">
                <div className="space-y-3 text-lg font-semibold">
                    <h1></h1>
                    <ReactTyped 
                        className='text-3xl font-bold'
                        cursorChar=''
                        typeSpeed={30}
                        strings={[name]}
                    />
                    <div className="">
                        <h1 className='text-xl font-extrabold'>Counselor: {counselor}</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row space-x-12">
                        <p className='flex items-center'>
                            <span><img className='h-8 w-10' src={icon} alt="" /></span>
                            <span>Category: {category}</span>
                        </p>
                        <p>Cost: {pricing}</p>
                    </div>
                    <div className="space-y-3">
                        <p>Time: {duration}</p>
                    </div>
                    <div className="flex space-x-8 items-center">
                        <Rating
                            initialRating={rating} 
                            readonly
                            fullSymbol={<FaStar className='text-orange-500' />}
                            emptySymbol={<FaStar className='text-gray-300' />}
                        />
                        <p>{rating}/5</p>
                    </div>
                    <div className="">
                        {description}
                    </div>
                    <div className="">
                        <button onClick={() => document.getElementById("my_modal_5").showModal()} className='border-2 py-2 px-5 rounded-lg'>
                            Enroll Now
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-[40%]">
                    <img className='h-auto w-full rounded-lg' src={image} alt="" />
                </div>
            </div>
            {/* Optional Part */}
            <div className="">
                <Optional />
            </div>
            <EnrollModal loadData={loadData} />
        </div>
    );
};

export default Details;
