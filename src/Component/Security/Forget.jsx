import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { AuthUserContext } from "../../FireBase/Provider";
import toast from "react-hot-toast";

const Forget = () => {
  const {setIsLoading}=useContext(AuthUserContext)
  useEffect(()=>{
    document.title='Career Path || Forget Password'

  },[])
    const location=useLocation()
    const em=location.state
    
    const[email,setEmail]=useState(em?em:'')
    
    const {resetPassword}=useContext(AuthUserContext)
    const navigate=useNavigate()

    const handleReset=(e)=>{
        e.preventDefault()

        resetPassword(email)
        .then(result=>{
          setIsLoading(false)
          toast.success("Password Reset email sent")
          window.open("https://mail.google.com", "_blank")
          navigate('/sForget')
          
        })
        .catch(er=>{
            toast.error('Error sending password reset email.')
        })
    }
    
    
    
  return (
    <div>
      <div className="hero mt-10 ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card bg-base-200  w-full  shrink-0 shadow-2xl">
            <ReactTyped
              strings={["Password Forget Now "]}
              className="text-3xl h-10 mt-9 text-primary text-center font-bold"
              cursorChar=""
              typeSpeed={40}
              backSpeed={30}
              backDelay={3000}
            ></ReactTyped>
            <form onSubmit={handleReset}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="email"
                  name="email"
                  className="input input-bordered border-primary focus:outline-primary md:w-[400px]"
                />
              </div>
              
              <div className="form-control mt-6">
                <button  className="btn text-white font-bold bg-primary hover:bg-primary">
                 Reset
                </button>
                
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
