import React, { useState, useEffect } from "react";
import Axios from "../Axios";
import VButton from "./icons/VButton";
export default function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Axios.get("/getfaq");
        const data = res.data;
        console.log(data);
        setFaqs(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="mx-3 md:mx-5 lg:mx-7 xl:mx-9 border max-h-fit">
        <div className="mt-12 md:mt-14 lg:mt-16 xl:mt-20">
          <div className="text-center font-f1 text-[#181423] font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Frequently Asked Questions
          </div>
          <div className="text-center font-f1 text-[#4D4D4D] mt-2 md:mt-3 lg:mt-4 xl:mt-5 text-xs md:text-sm lg:text-base xl:text-lg ">
            (FAQ’s)
          </div>
        </div>
        <div className="  mx-10 md:mx-20 lg:mx-28 xl:mx-36 mt-8 md:mt-10 lg:mt-12 xl:mt-14 ">
          <div className="text-sm w-68  ">
            <div className="">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-2.5 md:p-3 lg:p-4 xl:p-5 mb-3 md:mb-4 lg:mb-5 xl:mb-6 border border-solid border-[#F9F9F9] rounded-lg md:rounded-xl bg-[#F9F9F9]"
                >
                  <button
                    className="inline-flex items-center justify-between text-gray-900 w-full text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="text-[#023020] font-f1 font-bold text-xs md:text-base lg:text-lg xl:text-xl ">
                      {faq.question}
                    </p>
                    <VButton />
                  </button>
                  <div
                    className="text-base text-gray-900  mt-2"
                    style={{
                      maxHeight: activeIndex === index ? "250px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease-in-out",
                    }}
                  >
                    <div className="text-[#4D4D4D] leading-5 md:leading-6 lg:leading-6 xl:leading-7 font-f1 text-[0.63rem] md:text-xs lg:text-sm xl:text-base  ">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-10  md:mb-14 lg:mb-16 xl:mb-20"></div>
      </div>
    </>
  );
}
