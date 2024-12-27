import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { AuthUserContext } from "../../FireBase/Provider";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, update, setIsLoading } = useContext(AuthUserContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    checkbox: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const checkbox = e.target.checkbox.checked;
    setErrorMessage({
      name: "",
      email: "",
      photo: "",
      password: "",
      checkbox: "",
    });
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!name) {
      setErrorMessage((pError) => ({
        ...pError,
        name: "Invalid Name",
      }));
      toast.error("Invalid Name");
      return;
    }

    if (!photo) {
      setErrorMessage((pError) => ({
        ...pError,
        photo: "Invalid Photo",
      }));
      toast.error("Invalid Photo");
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error("Invalid Password");
      setErrorMessage((pError) => ({
        ...pError,
        password:
          "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
      }));
      return;
    }

    if (!checkbox) {
      return toast.error("Accept the terms and conditions");
    }

    register(email, password)
      .then((result) => {
        update(name, photo)
          .then((result) => {
            navigate('/');
            setIsLoading(false);
            toast.success("Registration successful");
          })
          .catch((er) => {
            toast.error('Something went wrong');
          })
      })
      .catch((error) => {
        

        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorMessage((prevError) => ({
              ...prevError,
              email: "This email is already in use. Please use a different email.",
            }));
            toast.error('This email is already in use');
            break;

          case "auth/invalid-email":
            setErrorMessage((prevError) => ({
              ...prevError,
              email: "Please enter a valid email address.",
            }));
            toast.error('Please enter a valid email address.');
            break;

          case "auth/missing-email":
            setErrorMessage((prevError) => ({
              ...prevError,
              email: "Invalid email",
            }));
            toast.error('Invalid email');
            break;

          default:
            toast.error("Something went wrong! Please try again later.");
            break;
        }
      });
  };

  useEffect(() => {
    document.title = ' Career Path || Registration';
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="hero my-10 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-200 w-full shrink-0 shadow-2xl">
              <ReactTyped
                strings={["Registration Now"]}
                className="text-3xl h-10 mt-9 text-primary text-center font-bold"
                cursorChar=""
                typeSpeed={40}
                backSpeed={30}
                backDelay={3000}
              ></ReactTyped>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered border-primary focus:outline-primary w-full sm:w-[400px]"
                  />
                  {errorMessage.name && (
                    <p className="text-red-600">{errorMessage.name}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered border-primary focus:outline-primary w-full sm:w-[400px]"
                  />
                  {errorMessage.email && (
                    <p className="text-red-600">{errorMessage.email}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    className="input input-bordered border-primary focus:outline-primary w-full sm:w-[400px]"
                  />
                  {errorMessage.photo && (
                    <p className="text-red-600">{errorMessage.photo}</p>
                  )}
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered border-primary focus:outline-primary w-full sm:w-[400px]"
                  />
                  {errorMessage.password && (
                    <p className="text-red-600 w-[300px]">{errorMessage.password}</p>
                  )}
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-14 right-6 cursor-pointer"
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </div>
                </div>
                <div className="form-control mt-3">
                  <label className="label justify-start gap-4 cursor-pointer">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="checkbox"
                    />
                    <span className="label-text">Accept Terms & Conditions</span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-white font-bold bg-primary hover:bg-primary w-full sm:w-[400px]">
                    Register
                  </button>
                  <Link className="btn text-white font-bold bg-primary hover:bg-primary w-full sm:w-[400px] mt-3">
                    <FaGoogle /> Continue with Google
                  </Link>
                </div>
                <div className="mt-3">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary">
                      Sign-In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
