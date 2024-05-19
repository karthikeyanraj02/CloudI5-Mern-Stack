import React from "react";
import BgImg from "../assets/Bg.jpg";
import logo from "../assets/logo-ci5.png";
import Tick from "./icons/Tick";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const scrollToRegister = () => {
    const registerSection = document.getElementById("register");
    registerSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          src={BgImg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#023020] opacity-50"></div>
        <div className="absolute inset-0  pt-0.5 md:pt-1 lg:pt-2 xl:pt-4 ">
          <div className="  h-2">
            <div className="  ml-4 md:ml-7 lg:ml-10 xl:ml-14 ">
              <img
                src={logo}
                alt="Logo"
                className="  w-24 h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 xl:w-40 xl:h-24"
              />
            </div>
            <div className="flex justify-center">
              <div className="  h-96 mt-14 md:mt-24 lg:w-3/5">
                <div className="  text-center font-bold font-f1 text-white text-xl md:text-2xl lg:text-4xl xl:text-5xl">
                  Crafting Digital Experiences,
                  <br />
                  <div className="mt-1 md:mt-2 lg:mt-3 ">
                    {" "}
                    One Pixel at a Time.
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className=" mt-10 md:mt-12 lg:mt-8 xl:mt-10 h-96">
                    <div className="flex flex-col md:flex md:justify-center sm:block lg:hidden">
                      <div className="flex justify-center">
                        <div className="">
                          <Tick />
                        </div>
                        <div className="text-base text-white font-f1 ml-1 md:ml-2 -mt-1 md:text-lg">
                          Innovation
                        </div>
                      </div>
                      <div className="flex justify-center  -mt-3 ml-10 md:ml-11">
                        <div className="">
                          <Tick />
                        </div>
                        <div className="text-base text-white font-f1 ml-1 md:ml-2 -mt-1 md:text-lg">
                          Online Presence
                        </div>
                      </div>{" "}
                      <div className="flex justify-center -mt-3 -ml-4 md:-ml-4 ">
                        <div className="">
                          <Tick />
                        </div>
                        <div className="text-base text-white font-f1 ml-1 md:ml-2 -mt-1 md:text-lg">
                          Creative
                        </div>
                      </div>
                      <div className=" mt-6 md:mt-7  text-center">
                        <button
                          onClick={scrollToRegister}
                          className="text-white  rounded font-f1 p-1 px-3 md:p-1 md:px-4 text-xs md:text-sm   border-[#D7AC14] bg-[#D7AC14] hover:bg-[#d5b951]"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                    <div className="hidden lg:block ">
                      <div className="flex justify-between lg:gap-x-3 xl:gap-x-5 ">
                        <div className="flex justify-center  ">
                          <div className="">
                            <Tick />
                          </div>
                          <div className="text-base xl:text-lg font-f1 text-white ml-1">
                            Innovation
                          </div>
                        </div>{" "}
                        <div className="flex justify-center    ">
                          <div className="">
                            <Tick />
                          </div>
                          <div className="text-base xl:text-lg font-f1 text-white ml-1 ">
                            Online Presence
                          </div>
                        </div>{" "}
                        <div className="flex justify-center    ">
                          <div className="">
                            <Tick />
                          </div>
                          <div className="text-base xl:text-lg font-f1 text-white ml-1 ">
                            Creative
                          </div>
                        </div>
                      </div>
                      <div className="  mt-14 xl:mt-20  text-center">
                        <button
                          onClick={scrollToRegister}
                          className="text-white font-f1 p-2 px-8 xl:p-2 xl:px-10 text-sm xl:text-base border border-[#D7AC14] bg-[#D7AC14] rounded-lg hover:bg-[#d5b951]"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9]   mx-3 md:mx-5 lg:mx-7 xl:mx-9 max-h-fit">
        <div className="   mx-4 p-5 md:mx-6 lg:mx-10 xl:mx-12">
          <div className="   mt-8 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 ">
            <div className="text-lg font-f1 text-[#006743] font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <span className="text-black ">Our Approach:</span> “Collaborative,
              Creative, Custom” ?
            </div>
          </div>
          <div className="mt-5 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-10">
            <p className=" text-[#4D4D4D] font-f1 leading-loose text-wrap text-xs md:text-sm md:leading-loose lg:text-base lg:leading-[2rem] xl:text-lg xl:leading-[3rem] 2xl:text-xl 2xl:leading-[3.5rem] ">
              We take a collaborative approach to every project, working closely
              with you to understand your goals, your audience, and your unique
              selling points. From there, our team of designers and developers
              leverage their expertise to craft a custom solution that not only
              looks beautiful but also delivers tangible results for your
              business. Our team is comprised of talented designers and
              developers who are passionate about pushing the boundaries of
              creativity and innovation. We don't just build websites – we
              create digital experiences that leave a lasting impression.
            </p>
          </div>
        </div>
        <div className="mb-16 md:mb-20 lg:mb-24 xl:mb-28"></div>
      </div>
    </div>
  );
}
