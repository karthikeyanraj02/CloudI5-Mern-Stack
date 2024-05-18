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
        <div className="absolute top-[45px] left-[55px]">
          <img
            src={logo}
            alt="Logo"
            className="w-[52px] h-[22px] sm:w-[62px] sm:h-[32px] md:w-[82px] md:h-[42px] lg:w-[102px] lg:h-[52px] xl:w-[122px] xl:h-[62px] 2xl:w-[142px] 2xl:h-[72px]"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-[744.75px]">
            <div className="w-full max-w-[744.75px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
              <div className="w-full max-w-[744.75px]">
                <div className="flex justify-center">
                  <div className="font-[Mulish] font-extrabold text-3xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight text-center">
                    Crafting Digital Experiences,
                    <div className="mt-4 sm:mt-6"> One Pixel at a Time.</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-fit h-auto mt-8 sm:mt-12 flex">
                  <div className="flex justify-start w-fit">
                    <div>
                      <Tick />
                    </div>
                    <div className="-mt-1 ml-2 text-white font-[Mulish] font-normal text-lg ">
                      Innovation
                    </div>
                  </div>
                  <div className="flex justify-center w-fit ml-3">
                    <div>
                      <Tick />
                    </div>
                    <div className="-mt-1 ml-2 text-white font-[Mulish] font-normal text-lg ">
                      Online Presence
                    </div>
                  </div>
                  <div className="flex justify-end w-fit ml-3">
                    <div>
                      <Tick />
                    </div>
                    <div className="-mt-1 ml-2 text-white font-[Mulish] font-normal text-lg ">
                      Creative
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center mt-8 sm:mt-12">
                  <button
                    onClick={scrollToRegister}
                    className="text-white text-lg font-[Mulish] p-2 px-5 border border-[#D7AC14] bg-[#D7AC14] rounded-lg hover:bg-[#b89413] "
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9]   mx-3 md:mx-5 lg:mx-7 xl:mx-9 max-h-fit">
        <div className="   mx-4 p-5 md:mx-6 lg:mx-10 xl:mx-12">
          <div className="   mt-8 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 ">
            <div className="text-lg text-[Mulish] text-[#006743] font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              <span className="text-black">Our Approach:</span> “Collaborative,
              Creative, Custom” ?
            </div>
          </div>
          <div className="mt-5 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-10">
            <p className=" text-[#4D4D4D] font-[Mulish] leading-loose text-wrap text-xs md:text-sm md:leading-loose lg:text-base lg:leading-[2rem] xl:text-lg xl:leading-[3rem] 2xl:text-xl 2xl:leading-[3.5rem] ">
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
