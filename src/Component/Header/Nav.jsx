import React, { useContext, useState } from "react";
import logo from "./logo.webp";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../FireBase/Provider";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, logout } = useContext(AuthUserContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully Logout");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="bg-[#091E3E]">
      <div className="mx-auto w-full max-w-[1600px] text-white flex justify-between items-center px-4">
        {/* Logo */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:inline-block">
          <Link to="/">
            <img className="h-20 w-28" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "border-b-4 border-white" : "hover:border-b-4 border-white"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "border-b-4 border-white" : "hover:border-b-4 border-white"}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/class"
            className={({ isActive }) =>
              `${isActive ? "border-b-4 border-white" : "hover:border-b-4 border-white"}`
            }
          >
            Class
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${isActive ? "border-b-4 border-white" : "hover:border-b-4 border-white"}`
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "border-b-4 border-white" : "hover:border-b-4 border-white"}`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* User Avatar and Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="btn btn-ghost btn-circle avatar focus:outline-none"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src={
                  user?.photoURL ||
                  "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                }
              />
            </div>
          </button>
          {dropdownOpen && (
            <ul
              className="menu menu-xl absolute right-0 bg-white text-black rounded-box mt-3 shadow-lg z-10 w-[500px]"
              onMouseLeave={() => setDropdownOpen(false)} 
            >
              <li>
                <div className="">
                  <div className="">
                    <img className="h-12 w-12 rounded-full" src={user?.photoURL || ''} alt="" />
                  </div>
                  <div className="">
                    <h1>{user.displayName}</h1>
                    <p>{user?.email}</p>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="block py-2 px-4 hover:bg-gray-100"
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className="block py-2 px-4 hover:bg-gray-100"
                >
                  Settings
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-2 px-4 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#091E3E] text-white px-4 space-y-4">
          <NavLink
            to="/"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/class"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Class
          </NavLink>
          <NavLink
            to="/profile"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            My Profile
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>

          {/* Login/Logout for mobile */}
          <div className="flex flex-col space-y-2">
            {user ? (
              <button
                onClick={handleLogout}
                className="border border-white py-2 px-5 rounded-lg font-semibold"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="border border-white py-2 px-5 rounded-lg font-semibold">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
