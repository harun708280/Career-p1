import React from "react";
import logo from './logo.webp'
const Footer = () => {
  return (
    <div className="bg-[#091E3E] ">
      <div className="w-11/12 mx-auto max-w-[1500px]">
      <footer className="footer  text-white p-10">
        <aside>
          <img className="h-20 w-32" src={logo} alt="" />
          <p>
            Career Path Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
