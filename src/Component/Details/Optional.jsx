import React, { useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import D1 from './d1.webp'
import D2 from './d2.png'
import D3 from './d4.webp'
import AOS from "aos";
import "aos/dist/aos.css";
import Comments from './Comments';
const Optional = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            offset:2000
        })

    },[])
    return (
        <div data-aos="zoom-in-up">
            <div  className="text-center space-y-3 my-7">
            <ReactTyped
            strings={[
                "Is This Service Right for You?"
            ]}
            className='text-xl md:text-4xl font-extrabold text-primary text-center'
            cursorChar=''
            typeSpeed={40}
            >


            </ReactTyped>
            <h1>Our Career Coaching and Mentoring services are designed to assist individuals at every stage of their professional journey. We recognize that a development plan is a long-term process, and our expert career guidance can play a crucial role in shaping your path to success. Our services are designed for:</h1>
            </div>
            <div  className="grid  md:grid-cols-3 gap-6 text-center my-12">
                <div className="">
                    <div className="flex flex-col justify-center items-center">
                        <img className='w-[200px] flex justify-center items-center' src={D1} alt="" />
                        <div className="">
                            <h1 className='text-2xl font-bold my-2 text-primary'>Students and Recent Graduates</h1>
                            <p>We support those who are unsure about their academic or career paths by helping them align their studies with their long-term career goals. Our career mentors focus on developing the essential skills needed to enter the job market and offer guidance during the vital transition from education to professional life.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div  className="flex flex-col items-center">
                        <img className='w-[200px]' src={D2} alt="" />
                        <div className="">
                            <h1 className='text-2xl font-bold my-2 text-primary'  >Early to Mid-Career Professionals</h1>
                            <p>We support those who are unsure about their academic or career paths by helping them align their studies with their long-term career goals. Our career mentors focus on developing the essential skills needed to enter the job market and offer guidance during the vital transition from education to professional life.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col items-center">
                        <img className='w-[200px]' src={D3} alt="" />
                        <div className="text-center">
                            <h1 className='text-2xl font-bold my-2 text-primary' >Experienced Professionals and Executives</h1>
                            <p>We support those who are unsure about their academic or career paths by helping them align their studies with their long-term career goals. Our career mentors focus on developing the essential skills needed to enter the job market and offer guidance during the vital transition from education to professional life.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="">
                <Comments></Comments>
            </div>
        </div>
    );
};

export default Optional;