import React from "react";
import Enter from "./icons/Enter";
import Eye from "./icons/Eye";
import Store from "./icons/Store";
import Manager from "./icons/Manager";
import Speaker from "./icons/Speaker";
import Touch from "./icons/Touch";
import Money from "./icons/Money";
import Training from "./icons/Training";
import CircleTick from "./icons/CircleTick";
import modelImg from "../assets/model-ci5.png";
import { useNavigate } from "react-router-dom";
export default function Services() {
  const navigate = useNavigate();

  const scrollToRegister = () => {
    const registerSection = document.getElementById("register");
    registerSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="p-5 mx-3 md:mx-5 lg:mx-7 xl:mx-9  ">
        <div className="md:mt-2 lg:mt-3 xl:mt-4 2xl:mt-6 ">
          <div className="flex flex-col">
            <div className="text-center text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Our Services
            </div>
            <div className="text-center text-[#006743] text-lg font-semibold md:text-xl md:mt-1 lg:text-2xl lg:mt-2 xl:text-3xl xl:mt-3 2xl:text-4xl 2xl:mt-5">
              “User-Centric Design, Responsive Solutions, Tailored Solutions”
            </div>
          </div>
        </div>
        <div className="   mt-10 md:mt-20 lg:mt-24 xl:mt-28">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-y-12  md:gap-y-16 gap-x-16 lg:gap-9 xl:gap-16 ">
            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-24 md:w-52 md:h-36 lg:w-56 lg:h-40 xl:w-60 xl:h-44 2xl:w-60 2xl:h-48 border border-[#D8E1DE] bg-[#D8E1DE] rounded-2xl">
                <div className=" m-2 md:m-3 lg:m-4 xl:m-5 2xl:m-6">
                  <div className="flex justify-center border border-white rounded-lg bg-white w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3 ">
                    <Enter />
                  </div>
                </div>
                <div className=" font-[Mulish]     -mt-1 ml-1.5 md:-mt-0 md:ml-2 lg:-mt-1 lg:ml-2 xl:-mt-5 xl:ml-3 2xl:-mt-3 2xl:ml-2     text-start text-[#182233]    w-32 p-1 md:w-40 md:p-1 lg:w-40 lg:p-2 xl:w-44 xl:p-3 2xl:w-48 2xl:p-3   font-bold text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl ">
                  Access to Existing Customers
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-24 md:w-52 md:h-36 lg:w-56 lg:h-40 xl:w-60 xl:h-44 2xl:w-60 2xl:h-48 border border-[#D8E1DE] bg-[#D8E1DE] rounded-2xl">
                <div className="  m-2 md:m-3 lg:m-4 xl:m-5 2xl:m-6">
                  <div className="flex justify-center border border-white rounded-lg bg-white w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3 ">
                    <Eye />
                  </div>
                </div>
                <div className=" font-[Mulish] text-[#182233]  -mt-1 ml-1.5 md:-mt-0 md:ml-2 lg:-mt-1 lg:ml-2 xl:-mt-5 xl:ml-3 2xl:-mt-3 2xl:ml-2       w-32 p-1 md:w-40 md:p-1 lg:w-40 lg:p-2 xl:w-44 xl:p-3 2xl:w-48 2xl:p-3   font-bold text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl ">
                  Brand and Visibility
                </div>
              </div>
            </div>{" "}
            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-24 md:w-52 md:h-36 lg:w-56 lg:h-40 xl:w-60 xl:h-44 2xl:w-60 2xl:h-48 border border-[#D8E1DE] bg-[#D8E1DE] rounded-2xl">
                <div className="  m-2 md:m-3 lg:m-4 xl:m-5 2xl:m-6">
                  <div className="flex justify-center border border-white rounded-lg bg-white w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3 ">
                    <Touch />
                  </div>
                </div>
                <div className=" font-[Mulish] text-[#182233]     -mt-1 ml-1.5 md:-mt-0 md:ml-2 lg:-mt-1 lg:ml-2 xl:-mt-5 xl:ml-3 2xl:-mt-3 2xl:ml-2  w-32 p-1 md:w-40 md:p-1 lg:w-40 lg:p-2 xl:w-44 xl:p-3 2xl:w-48 2xl:p-3   font-bold text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl ">
                  Easy to use Admin Panel
                </div>
              </div>
            </div>{" "}
            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-24 md:w-52 md:h-36 lg:w-56 lg:h-40 xl:w-60 xl:h-44 2xl:w-60 2xl:h-48 border border-[#D8E1DE] bg-[#D8E1DE] rounded-2xl">
                <div className="  m-2 md:m-3 lg:m-4 xl:m-5 2xl:m-6">
                  <div className="flex justify-center border border-white rounded-lg bg-white w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3 ">
                    <Speaker />
                  </div>
                </div>
                <div className=" font-[Mulish] text-[#182233]     -mt-1 ml-1.5 md:-mt-0 md:ml-2 lg:-mt-1 lg:ml-2 xl:-mt-5 xl:ml-3 2xl:-mt-3 2xl:ml-2  w-36 p-0 md:w-48 md:p-1 lg:w-[10.2rem] lg:p-0 xl:w-48 xl:p-2 2xl:w-52 2xl:p-2   font-bold text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl ">
                  Gain from our digital marketing initiative
                </div>
              </div>
            </div>{" "}
            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-24 md:w-52 md:h-36 lg:w-56 lg:h-40 xl:w-60 xl:h-44 2xl:w-60 2xl:h-48 border border-[#D8E1DE] bg-[#D8E1DE] rounded-2xl">
                <div className="  m-2 md:m-3 lg:m-4 xl:m-5 2xl:m-6">
                  <div className="flex justify-center border border-white rounded-lg bg-white w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3 ">
                    <Manager />
                  </div>
                </div>
                <div className=" font-[Mulish] text-[#182233] -mt-1 ml-1.5 md:-mt-0 md:ml-2 lg:-mt-1 lg:ml-2 xl:-mt-5 xl:ml-3 2xl:-mt-3 2xl:ml-2  w-32 p-1 md:w-40 md:p-1 lg:w-40 lg:p-2 xl:w-44 xl:p-3 2xl:w-48 2xl:p-3   font-bold text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl ">
                  Dedicated Success Executive
                </div>
              </div>
            </div>{" "}
            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-24 md:w-52 md:h-36 lg:w-56 lg:h-40 xl:w-60 xl:h-44 2xl:w-60 2xl:h-48 border border-[#D8E1DE] bg-[#D8E1DE] rounded-2xl">
                <div className="  m-2 md:m-3 lg:m-4 xl:m-5 2xl:m-6">
                  <div className="flex justify-center border border-white rounded-lg bg-white w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3 ">
                    <Training />
                  </div>
                </div>
                <div className=" font-[Mulish] text-[#182233] -mt-1 ml-1.5 md:-mt-0 md:ml-2 lg:-mt-1 lg:ml-2 xl:-mt-5 xl:ml-3 2xl:-mt-3 2xl:ml-2  w-32 p-1 md:w-40 md:p-1 lg:w-40 lg:p-2 xl:w-44 xl:p-3 2xl:w-48 2xl:p-3   font-bold text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl ">
                  Training and guidance
                </div>
              </div>
            </div>{" "}
            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-24 md:w-52 md:h-36 lg:w-56 lg:h-40 xl:w-60 xl:h-44 2xl:w-60 2xl:h-48 border border-[#D8E1DE] bg-[#D8E1DE] rounded-2xl">
                <div className="  m-2 md:m-3 lg:m-4 xl:m-5 2xl:m-6">
                  <div className="flex justify-center border border-white rounded-lg bg-white w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3 ">
                    <Store />
                  </div>
                </div>
                <div className=" font-[Mulish] text-[#182233]   -mt-1 ml-1.5 md:-mt-0 md:ml-2 lg:-mt-1 lg:ml-2 xl:-mt-5 xl:ml-3 2xl:-mt-3 2xl:ml-2  w-32 p-1 md:w-40 md:p-1 lg:w-40 lg:p-2 xl:w-44 xl:p-3 2xl:w-48 2xl:p-3   font-bold text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl ">
                  Feature at your service
                </div>
              </div>
            </div>{" "}
            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-24 md:w-52 md:h-36 lg:w-56 lg:h-40 xl:w-60 xl:h-44 2xl:w-60 2xl:h-48 border border-[#D8E1DE] bg-[#D8E1DE] rounded-2xl">
                <div className="  m-2 md:m-3 lg:m-4 xl:m-5 2xl:m-6">
                  <div className="flex justify-center border border-white rounded-lg bg-white w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3 ">
                    <Money />
                  </div>
                </div>
                <div className=" font-[Mulish] text-[#182233] -mt-1 ml-1.5 md:-mt-0 md:ml-2 lg:-mt-1 lg:ml-2 xl:-mt-5 xl:ml-3 2xl:-mt-3 2xl:ml-2  w-32 p-1 md:w-40 md:p-1 lg:w-40 lg:p-2 xl:w-44 xl:p-3 2xl:w-48 2xl:p-3   font-bold text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-xl ">
                  Working capital support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-[#FFF1F6] bg-[#FFF1F6] rounded-2xl lg:rounded-3xl mt-8 md:mt-14 lg:mt-20 xl:mt-24 2xl:mt-24 mx-3 md:mx-5 lg:mx-7 xl:mx-9  ">
        <div className="  max-h-screen  mt-8 ml-4   md:mt-12 md:ml-8 lg:mt-16 lg:ml-12 xl:mt-20 xl:ml-20 2xl:mt-24 2xl:ml-24  ">
          <div className="    text-[#006743] text-lg font-semibold md:text-xl md:mt-1 lg:text-2xl lg:mt-2 xl:text-3xl xl:mt-3 2xl:text-4xl 2xl:mt-5">
            <span className="text-black">Why Choose Cloudi5 </span>for Your Web
            Design Needs :
          </div>
          <div className="flex">
            <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 w-80 md:w-3/5 lg:w-2/3  xl:w-2/3 2xl-5/6">
              <div className="flex  ">
                <div className="mt-1.5 md:mt-2 lg:mt-2.5 xl:mt-3 2xl:mt-1">
                  <CircleTick />
                </div>
                <div className="ml-2 md:ml-2 lg:ml-3 xl:ml-4 2xl:ml-6  text-[#181423] font-[Mulish] leading-4 text-wrap text-xs md:text-sm md:leading-5 lg:text-base lg:leading-6 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">
                  With years of experience in the industry, our team brings a
                  wealth of expertise to every project.
                </div>
              </div>{" "}
              <div className="flex   mt-5 md:mt-6 lg:mt-7 xl:mt-8 2xl:mt-9">
                <div className="mt-1.5 md:mt-5 lg:mt-6 xl:mt-3 2xl:mt-1">
                  <CircleTick />
                </div>
                <div className="ml-2 md:ml-2 lg:ml-3 xl:ml-4 2xl:ml-6  text-[#181423] font-[Mulish] leading-4 text-wrap text-xs md:text-sm md:leading-5 lg:text-base lg:leading-6 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">
                  We have successfully designed and developed websites for a
                  diverse range of clients across various industries
                </div>
              </div>{" "}
              <div className="flex    mt-5 md:mt-6 lg:mt-7 xl:mt-8 2xl:mt-9">
                <div className="mt-3.5 md:mt-5 lg:mt-6 xl:mt-5 2xl:mt-3.5">
                  <CircleTick />
                </div>
                <div className="ml-2 md:ml-2 lg:ml-3 xl:ml-4 2xl:ml-6  text-[#181423] font-[Mulish] leading-4 text-wrap text-xs md:text-sm md:leading-5 lg:text-base lg:leading-6 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">
                  From seamless navigation to compelling calls-to-action, we
                  ensure that every aspect of your website is designed with the
                  user in mind.
                </div>
              </div>{" "}
              <div className="flex   mt-5 md:mt-6 lg:mt-7 xl:mt-8 2xl:mt-9">
                <div className="mt-0 md:mt-0 lg:mt-0 xl:mt-0.5 2xl:mt-1">
                  <CircleTick />
                </div>
                <div className="ml-2 md:ml-2 lg:ml-3 xl:ml-4 2xl:ml-6   text-[#181423] font-[Mulish] leading-4 text-wrap text-xs md:text-sm md:leading-5 lg:text-base lg:leading-6 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8 ">
                  We understand that every business is unique.
                </div>
              </div>
              <div className=" mb-12 md:mb-24 lg:mb-28 xl:mb-40 "></div>
            </div>
            <div className="   md:mt-8 md:ml-4 lg:mt-9 lg:ml-3 xl:mt-12 xl:ml-7 ">
              <div className=" hidden sm:block md:w-52 md:h-96 lg:w-60 xl:w-[18rem] 2xl-72">
                <img src={modelImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#023020] border  relative bg-[#023020] rounded-3xl  mx-7 -mt-5 md:mx-14 md:-mt-16 lg:mx-20 lg:-mt-12 xl:mx-32 xl:-mt-20  ">
        <div className="  my-10 mx-5 h-full">
          <div className="  h-10 text-center text-lg font-[Mulish]  text-white font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Ready to elevate your online presence?
            <br />
            <div className="md:mt-1 lg:mt-1.5 xl:mt-2">
              Let's turn your vision into reality!
            </div>
          </div>
          <div className="text-justify text-[#BCE4D7] mt-8 md:mt-11 lg:mt-12 xl:mt-20 md:text-center lg:text-center text-xs md:text-sm lg:text-lg xl:text-xl ">
            Contact us today to schedule a consultation and discover our
            exceptional web design services.
          </div>
          <div className="flex justify-center mt-6 md:mt-8 lg:mt-9 xl:mt-10">
            <button
              onClick={scrollToRegister}
              className="text-[#023020] font-[Mulish] font-bold  text-base md:text-base lg:text-lg  p-1 px-3 md:p-1.5 md:px-4 lg:p-2 lg:px-6 xl:p-3 xl:px-8    border border-white bg-white rounded-lg hover:bg-gray-200"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
      <div className="mx-3 md:mx-5 lg:mx-7 xl:mx-9">
        <div>
          <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-center text-lg font-[Mulish] text-black font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Register your interest and wait for callback
          </div>
          <div className="text-center text-[#797979] text-xs md:text-sm lg:text-lg xl:text-xl mt-2 md:mt-3 lg:mt-4 xl:mt-5">
            You can own a branded licensed website in 5 simple steps
          </div>
          <div className="  mt-7   ">
            <div className="sm:block md:hidden">
              <div className="sm:w-[398px] mx-auto">
                <div class="flex justify-center ">
                  <div class="flex flex-col">
                    <div class="flex justify-center border border-[#006743] text-white rounded-lg bg-[#006743] w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3">
                      01
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-3 ">
                  <span className="border border-dashed border-[#89BEAC] rounded-lg p-1 px-2 text-sm ">
                    Register your interest
                  </span>
                </div>
                <div className="flex justify-center">
                  <div class="w-1 h-full relative mt-1 ">
                    <span class="absolute top-0 left-1/2 transform -translate-x-1/2  text-[0.4rem]">
                      | | | |
                    </span>
                  </div>
                </div>
                <div class="flex justify-center mt-12">
                  <div class="flex flex-col">
                    <div class="flex justify-center border border-[#006743] text-white rounded-lg bg-[#006743] w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3">
                      02
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-3 ">
                  <span className="border border-dashed border-[#89BEAC] rounded-lg p-1 px-2 text-sm ">
                    Team connects with you
                  </span>
                </div>
                <div className="flex justify-center">
                  <div class="w-1 h-full relative mt-1 ">
                    <span class="absolute top-0 left-1/2 transform -translate-x-1/2  text-[0.4rem]">
                      | | | |
                    </span>
                  </div>
                </div>
                <div class="flex justify-center mt-12">
                  <div class="flex flex-col">
                    <div class="flex justify-center border border-[#006743] text-white rounded-lg bg-[#006743] w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3">
                      03
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-3 ">
                  <span className="border border-dashed border-[#89BEAC] rounded-lg p-1 px-2 text-sm ">
                    Submit your proposal
                  </span>
                </div>
                <div className="flex justify-center">
                  <div class="w-1 h-full relative mt-1 ">
                    <span class="absolute top-0 left-1/2 transform -translate-x-1/2  text-[0.4rem]">
                      | | | |
                    </span>
                  </div>
                </div>
                <div class="flex justify-center mt-12">
                  <div class="flex flex-col">
                    <div class="flex justify-center border border-[#006743] text-white rounded-lg bg-[#006743] w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3">
                      04
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-3 ">
                  <span className="border border-dashed border-[#89BEAC] rounded-lg p-1 px-2 text-sm ">
                    Connect our Agency
                  </span>
                </div>
                <div className="flex justify-center">
                  <div class="w-1 h-full relative mt-1 ">
                    <span class="absolute top-0 left-1/2 transform -translate-x-1/2  text-[0.4rem]">
                      | | | |
                    </span>
                  </div>
                </div>
                <div class="flex justify-center mt-12">
                  <div class="flex flex-col">
                    <div class="flex justify-center border border-[#006743] text-white rounded-lg bg-[#006743] w-8 p-0.5 md:w-10 md:p-1 lg:w-11 lg:p-1 xl:w-14 xl:p-1 2xl:w-16 2xl:p-3">
                      05
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-3 mb-12 ">
                  <span className="border border-dashed border-[#89BEAC] rounded-lg p-1 px-2 text-sm ">
                    Start business operation
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex h-32 lg:h-36 xl:h-48 mt-7 lg:mt-10 xl:mt-12  ">
              <div className="flex">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center border border-[#006743] text-white rounded-lg lg:rounded-lg bg-[#006743] shadow-xl w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14 ">
                    01
                  </div>
                  <div className="  text-center text-[0.62rem] text-[#4D4D4D] lg:text-xs border-2 border-dashed rounded-md lg:rounded-lg xl:rounded-xl mt-3 lg:mt-6 xl:mt-9 p-1 px-1 lg:w-auto lg:whitespace-nowrap xl:text-lg xl:px-5 ">
                    Register your interest
                  </div>
                </div>
                <div className="text-xl mx-2 whitespace-nowrap lg:mt-1 xl:mt-5 ">
                  --------
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center border border-[#006743] text-white rounded-lg lg:rounded-lg bg-[#006743] shadow-xl w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14  ">
                    02
                  </div>
                  <div className="  text-center text-[#4D4D4D] text-[0.62rem] lg:text-xs border-2 border-dashed rounded-md lg:rounded-lg xl:rounded-xl mt-3 lg:mt-6 xl:mt-9 p-1 px-1 lg:w-auto lg:whitespace-nowrap xl:text-lg xl:px-5">
                    Team connects with you
                  </div>
                </div>
                <div className="text-xl mx-2 whitespace-nowrap lg:mt-1 xl:mt-5">
                  --------
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center border border-[#006743] text-white rounded-lg lg:rounded-lg bg-[#006743] shadow-xl w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14  ">
                    03
                  </div>
                  <div className="  text-center text-[#4D4D4D] text-[0.62rem] lg:text-xs border-2 border-dashed rounded-md lg:rounded-lg xl:rounded-xl mt-3 lg:mt-6 xl:mt-9 p-1 px-1 lg:w-auto lg:whitespace-nowrap xl:text-lg xl:px-5">
                    Submit your proposal
                  </div>
                </div>
                <div className="text-xl mx-2 whitespace-nowrap lg:mt-1 xl:mt-5">
                  --------
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center border border-[#006743] text-white rounded-lg lg:rounded-lg bg-[#006743] shadow-xl w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14  ">
                    04
                  </div>
                  <div className="  text-center text-[#4D4D4D] text-[0.62rem] lg:text-xs border-2 border-dashed rounded-md lg:rounded-lg xl:rounded-xl mt-3 lg:mt-6 xl:mt-9 p-1 px-1 lg:w-auto lg:whitespace-nowrap xl:text-lg xl:px-5">
                    Connect our Agency
                  </div>
                </div>
                <div className="text-xl mx-2 whitespace-nowrap lg:mt-1 xl:mt-5">
                  --------
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center border border-[#006743] text-white rounded-lg lg:rounded-lg  bg-[#006743] shadow-xl w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-14 xl:h-14  ">
                    05
                  </div>
                  <div className=" text-center text-[#4D4D4D] text-[0.62rem] lg:text-xs border-2 border-dashed rounded-md lg:rounded-lg xl:rounded-xl mt-3 lg:mt-6 xl:mt-9 p-1 px-1 lg:w-auto  lg:whitespace-nowrap xl:text-lg  xl:px-5 ">
                    Start business operation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
