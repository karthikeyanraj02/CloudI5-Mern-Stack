import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-ci5.png";
import Linkedin from "./icons/Linkedin";
import FaceBook from "./icons/FaceBook";
import InstaGram from "./icons/InstaGram";
import X from "./icons/X";
import CopyRights from "./icons/CopyRights";
export default function Footer() {
  return (
    <>
      <div className=" border border-[#012216] max-h-fit bg-[#012216] mx-3 md:mx-5 lg:mx-7 xl:mx-9">
        <div className=" mx-6 md:mx-10 lg:mx-14 xl:mx-16 mt-6 md:mt-10 lg:mt-14 xl:mt-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
            <div className=" ">
              <div className="text-white text-start   text-base md:text-lg lg:text-lg xl:text-lg font-bold">
                SERVICES
              </div>
              <ul className="text-white text-start text-xs md:text-xs lg:text-sm xl:text-base mt-4 md:mt-4.5 lg:mt-5 xl:mt-5.5">
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Web Design</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Web Development</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Digital Marketing</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Mobile Application</Link>
                </li>
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Logo Design</Link>
                </li>
              </ul>
            </div>
            <div className=" ">
              <div className="text-white text-start   text-base md:text-lg lg:text-lg xl:text-lg font-bold">
                OUR PRODUCTS
              </div>
              <ul className="text-white text-start text-xs md:text-xs lg:text-sm xl:text-base mt-4 md:mt-4.5 lg:mt-5 xl:mt-5.5">
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">E-Commerce</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">School Software</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">ERP</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">CRM</Link>
                </li>
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Lead Management</Link>
                </li>
              </ul>
            </div>{" "}
            <div className=" ">
              <div className="text-white text-start   text-base md:text-lg lg:text-lg xl:text-lg font-bold">
                LEGAL PAGES
              </div>
              <ul className="text-white text-start text-xs md:text-xs lg:text-sm xl:text-base mt-4 md:mt-4.5 lg:mt-5 xl:mt-5.5">
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Terms and Conditions</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Privacy Policy</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Cancellation Policy</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Customer Policy</Link>
                </li>
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Return Policy</Link>
                </li>
              </ul>
            </div>{" "}
            <div className=" ">
              <div className="text-white text-start text-base md:text-lg lg:text-lg xl:text-lg font-bold">
                COMPANY
              </div>
              <ul className="text-white text-start text-xs md:text-xs lg:text-sm xl:text-base mt-4 md:mt-4.5 lg:mt-5 xl:mt-5.5">
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">About Us</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Blog</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Careers</Link>
                </li>{" "}
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </div>{" "}
            <div className=" ">
              <div className="text-white text-start text-base md:text-lg lg:text-lg xl:text-lg font-bold">
                NEED SUPPORT
              </div>
              <ul className="text-white text-start text-xs md:text-xs lg:text-sm xl:text-base mt-4 md:mt-4.5 lg:mt-5 xl:mt-5.5">
                <li className="  mt-1 md:mt-1.5 lg:mt-2">
                  <Link to="#">FAQs</Link>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div className="border-b w-full border-white mt-10 md:mt-14 lg:mt-18 xl:mt-20 "></div>
          <div className=" md:flex justify-between w-full">
            <div className="mt-1">
              <img
                src={Logo}
                className="w-12 h-8 md:w-14 md:h-10 lg:w-20 lg:h-12 xl:w-24 xl:h-16"
              />
              <div className="text-white text-justify text-xs mt-2 md:mt-3.5 lg:mt-5 xl:mt-4 md:w-64 lg:w-96 xl:w-1/2  ">
                We are committed to excellence in everything we do. From the
                quality of our work to the level of service we provide, we
                strive for nothing less than perfection.
              </div>
            </div>
            <div>
              <div className="mt-8 md:mt-4 lg:mt-4">
                <div className="text-white text-start text-base md:text-lg lg:text-lg xl:text-lg font-bold">
                  Social Media
                </div>
                <div className="text-white text-xs mt-2 md:mt-2.5 lg:mt-3 xl:mt-3.5  w-52 ">
                  Follow us on social media to find out the latest updates on
                  our progress
                </div>
                <div className="   mt-2 md:mt-2.5 lg:mt-3 xl:mt-3.5">
                  <ul className="flex gap-x-4 md:gap-x-3 lg:gap-x-3 xl:gap-x-2">
                    <li className="mt-0.5">
                      <Linkedin />
                    </li>
                    <li className="mt-0.5">
                      <FaceBook />
                    </li>
                    <li className="mt-0.5 md:mt-0">
                      <InstaGram />
                    </li>
                    <li className="mt-1 md:mt-0 md:ml-0.5 lg:mt-0.5 xl:mt-0 xl:ml-1.5">
                      <X />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 md:mb-6 lg:mb-7 xl:mb-8"></div>
      </div>
      <div className="bg-[#06885B] mx-3 md:mx-5 lg:mx-7 xl:mx-9  text-center text-white p-3 md:p-4 lg:p-5 xl:p-6 text-[0.63rem] md:text-xs    ">
        Cloudi5 Techologies 2024. All Rights Reserved.
      </div>
    </>
  );
}
