import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { AuthUserContext } from "../../FireBase/Provider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";

const Login = () => {
  useEffect(()=>{
    document.title=' Career Path || Login'
  },[])
  const location=useLocation()
  
  
  
  const [showPassword, setShowPassword] = useState(false);
  const {googleLogin,login,resetPassword}=useContext(AuthUserContext)
  const navigate=useNavigate()
  const handleGoogleLogin=()=>{
    googleLogin()
    .then(result=>{
      toast.success('login successful')
      navigate(`${location.state?location.state:'/'}`)
    })
    .catch(error=>{
      toast.error('something went wrong')
    })
  }
  const  handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
   
    login(email,password)
    .then(result=>{
      toast.success('successfully login')
      navigate(`${location.state?location.state:'/'}`)
    })
    .catch(error=>{
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("No user found with this email");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email address. Please enter a valid email.");
          break;
        
        
        
        default:
          toast.error("An unknown error occurred. Please try again.");
          console.error("Error Code:", error.code, "Message:", error.message);
      }
    })
    

  }
  const emailRef=useRef()
   
  const handleForgetPassword=()=>{
    
    
    const email=emailRef.current.value
    // if (!email) {
    //   toast.error("Please enter your email address");
    //   return;
    // }
    navigate('/forget',{state:email})
    
    

  }
  return (
    <div>
      <div className="">
        <div className="hero mt-10 ">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            
            <div className="card bg-base-200  w-full  shrink-0 shadow-2xl">
                <ReactTyped
                strings={["Login Now"]}
                className="text-3xl h-10 mt-9 text-primary text-center font-bold"
                cursorChar=""
                typeSpeed={40}
                backSpeed={30}
                backDelay={3000}
                
                >

                </ReactTyped>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input 
                   ref={emailRef}
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered border-primary focus:outline-primary md:w-[400px]"
                    
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    placeholder="password"
                    className="input input-bordered border-primary focus:outline-primary md:w-[400px]"
                  />
                  
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-14 right-6 cursor-pointer"
                  >
                    {showPassword ? (
                      <span>
                        <FaEyeSlash></FaEyeSlash>
                      </span>
                    ) : (
                      <span>
                        <FaEye></FaEye>
                      </span>
                    )}
                    
                  </div>
                  <label className="label">
                    <p onClick={handleForgetPassword} className="label-text-alt link link-hover">
                      Forgot password?
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-white font-bold bg-primary hover:bg-primary">Login</button>
                  <Link onClick={handleGoogleLogin} className="btn text-white font-bold  bg-primary hover:bg-primary"> <span><FaGoogle></FaGoogle></span> <span>Continue With Google</span></Link>
                </div>
               <div className="">
                 <p>Don't have an account ?<Link to='/register' className="text-red-600"> Sign up</Link></p>
               </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
