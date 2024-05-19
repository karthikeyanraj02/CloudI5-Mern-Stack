import React, { useState } from "react";
import { countries } from "countries-list";
import useClientRegister, {
  inputErrorHandler,
} from "../Hooks/useClientDetails";

export default function Details() {
  const countryList = Object.values(countries);
  const { loading, register } = useClientRegister();
  const [input, setInput] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
  });

  const submitHandlers = async (e) => {
    e.preventDefault();

    const isValid = inputErrorHandler(input);
    if (!isValid) return;
    await register(input);
    setInput({
      name: "",
      mobileNumber: "",
      email: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      address: "",
    });
  };

  return (
    <>
      <section id="register">
        <div className="mx-3 border bg-[#D8E1DE] md:mx-5 lg:mx-7 xl:mx-9">
          <div className="mt-9 md:mt-12 lg:mt-16 xl:mt-20 mx-20 md:mx-40 lg:mx-64 xl:mx-[340px]">
            <div className="text-lg font-f1 text-[#181423] font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Fill the details below :
            </div>
            <form onSubmit={submitHandlers}>
              <div className="mt-7 md:mt-10 lg:mt-12 xl:mt-14">
                <lable className="text-[0.90rem] font-f1 text-[#4D4D4D] md:text-base lg:text-base xl:text-lg font-bold ">
                  Name <span className="text-red-600">*</span>
                </lable>
                <br />
                <input
                  type="text"
                  value={input.name}
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                  className="w-full mb-2 p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg text-sm mt-1 md:mt-1.5 lg:mt-2 xl:mt-2.5 placeholder:text-left placeholder:text-xs lg:placeholder:text-base placeholder:text-[#A6A6A6]"
                  placeholder="Enter name"
                />
                <div className="sm:block md:hidden">
                  <label className="text-[0.90rem] font-f1 font-bold text-[#4D4D4D] ">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    value={input.mobileNumber}
                    onChange={(e) =>
                      setInput({ ...input, mobileNumber: e.target.value })
                    }
                    className="w-full p-2 rounded-lg text-sm  mt-1 mb-2 placeholder:text-left placeholder:text-xs placeholder:text-[#A6A6A6] "
                    placeholder="Enter your mobile number"
                  />
                  <label className="text-[0.90rem] font-f1 font-bold text-[#4D4D4D]">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    value={input.email}
                    onChange={(e) =>
                      setInput({ ...input, email: e.target.value })
                    }
                    className="w-full p-2 rounded-lg text-sm mt-1 mb-2 placeholder:text-left placeholder:text-xs placeholder:text-[#A6A6A6]"
                    placeholder="Enter your Email"
                  />
                  <label className="text-[0.90rem] font-f1 font-bold text-[#4D4D4D]">
                    Country <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <select
                    className="w-full p-2 rounded-lg font-f1  mt-1 mb-2 text-left text-black text-xs "
                    value={input.country}
                    onChange={(e) =>
                      setInput({ ...input, country: e.target.value })
                    }
                  >
                    <option value="" disabled hidden>
                      Select Country
                    </option>
                    {countryList.map((country, i) => (
                      <option
                        key={i}
                        value={country.name}
                        className="text-[#A6A6A6]"
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>

                  <label className="text-[0.90rem] font-f1 font-bold text-[#4D4D4D]">
                    State <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    value={input.state}
                    onChange={(e) =>
                      setInput({ ...input, state: e.target.value })
                    }
                    className="w-full p-2 rounded-lg text-sm mt-1 mb-2 placeholder:text-left placeholder:text-xs placeholder:text-[#A6A6A6]"
                    placeholder="Enter your State"
                  />
                  <label className="text-[0.90rem] font-f1 font-bold text-[#4D4D4D]">
                    City <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) =>
                      setInput({ ...input, city: e.target.value })
                    }
                    value={input.city}
                    className="w-full p-2 rounded-lg text-sm mt-1 mb-2 placeholder:text-left placeholder:text-xs placeholder:text-[#A6A6A6]"
                    placeholder="Enter your City"
                  />
                  <label className="text-[0.90rem] font-f1 font-bold text-[#4D4D4D]">
                    Pincode <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    value={input.pincode}
                    onChange={(e) =>
                      setInput({ ...input, pincode: e.target.value })
                    }
                    className="w-full p-2 rounded-lg text-sm mt-1 mb-2 placeholder:text-left placeholder:text-xs placeholder:text-[#A6A6A6]"
                    placeholder="Enter your Pincode"
                  />
                  <label className="text-[0.90rem] font-f1 font-bold text-[#4D4D4D]">
                    Address <span className="text-red-600">*</span>
                  </label>
                  <br />
                  <textarea
                    type="text"
                    value={input.address}
                    onChange={(e) =>
                      setInput({ ...input, address: e.target.value })
                    }
                    class="w-full p-2 rounded-lg text-sm mt-1 mb-2 h-28 pl-4 placeholder:text-left placeholder:text-xs placeholder:text-[#A6A6A6]"
                    placeholder="Enter your Address"
                  />
                  <div className="text-[0.63rem] font-f1 text-center mt-2">
                    By clicking submit, I agree to{" "}
                    <span className="text-[#023020] font-f1 font-semibold underline">
                      Terms and Conditions & Privacy Policy
                    </span>
                  </div>
                  <div className="text-center mt-3  max-w-fit mx-auto">
                    <button
                      className="border font-f1 border-[#A6A6A6] bg-[#A6A6A6] p-2 px-8 sm:px-12 md:px-16 lg:px-24 rounded-xl text-white font-bold hover:bg-[#b6b6b2] mb-12"
                      disabled={loading}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex justify-between mt-3 gap-x-5">
                    <div className="w-1/2">
                      <label className="text-[#4D4D4D] font-f1 text-base lg:text-base xl:text-lg font-bold">
                        Mobile Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={input.mobileNumber}
                        onChange={(e) =>
                          setInput({ ...input, mobileNumber: e.target.value })
                        }
                        className="text-[#4D4D4D] p-3 lg:p-4 xl:p-5 font-f1  rounded-lg mt-1 w-full placeholder:text-left placeholder:text-xs lg:placeholder:text-base placeholder:text-[#A6A6A6]"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-[#4D4D4D] font-f1 text-base lg:text-base xl:text-lg font-bold">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={input.email}
                        onChange={(e) =>
                          setInput({ ...input, email: e.target.value })
                        }
                        className="text-[#4D4D4D] p-3 font-f1 lg:p-4 xl:p-5 rounded-lg mt-1 w-full placeholder:text-left placeholder:text-xs lg:placeholder:text-base placeholder:text-[#A6A6A6]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-3 gap-x-5">
                    <div className="w-1/2">
                      <label className="text-[#4D4D4D] font-f1 text-base lg:text-base xl:text-lg font-bold">
                        Country <span className="text-red-600">*</span>
                      </label>
                      <select
                        className=" p-3 lg:p-4 xl:p-5 font-f1  rounded-lg mt-1 w-full placeholder:text-left text-base h-auto text-black"
                        value={input.country}
                        onChange={(e) =>
                          setInput({ ...input, country: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Select Country
                        </option>
                        {countryList.map((country, i) => (
                          <option
                            key={i}
                            value={country.name}
                            className="text-black text-base"
                          >
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-1/2">
                      <label className="text-[#4D4D4D] font-f1 text-base lg:text-base xl:text-lg font-bold">
                        State <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={input.state}
                        onChange={(e) =>
                          setInput({ ...input, state: e.target.value })
                        }
                        className="text-[#4D4D4D] p-3 font-f1 lg:p-4 xl:p-5 rounded-lg mt-1 w-full placeholder:text-left placeholder:text-xs lg:placeholder:text-base placeholder:text-[#A6A6A6]"
                        placeholder="Select your State"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-3 gap-x-5">
                    <div className="w-1/2">
                      <label className="text-[#4D4D4D] font-f1 text-base lg:text-base xl:text-lg font-bold">
                        City <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={input.city}
                        onChange={(e) =>
                          setInput({ ...input, city: e.target.value })
                        }
                        className="text-[#4D4D4D] p-3 font-f1 lg:p-4 xl:p-5 rounded-lg mt-1 w-full placeholder:text-left placeholder:text-xs lg:placeholder:text-base placeholder:text-[#A6A6A6]"
                        placeholder="Select your City "
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-[#4D4D4D] font-f1 text-base lg:text-base xl:text-lg font-bold">
                        Pincode <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={input.pincode}
                        onChange={(e) =>
                          setInput({ ...input, pincode: e.target.value })
                        }
                        className="text-[#4D4D4D] p-3 font-f1 lg:p-4 xl:p-5 rounded-lg mt-1 w-full placeholder:text-left placeholder:text-xs lg:placeholder:text-base placeholder:text-[#A6A6A6]"
                        placeholder="Enter your pincode"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="text-[#4D4D4D] font-f1 text-base lg:text-base xl:text-lg font-bold">
                      Address <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      className="w-full h-28 lg:h-32 xl:h-36 p-3 font-f1 lg:p-4 xl:p-5 rounded-lg mt-1.5 lg:mt-2 xl:mt-2.5 placeholder:text-left placeholder:text-xs lg:placeholder:text-base placeholder:text-[#A6A6A6]"
                      value={input.address}
                      onChange={(e) =>
                        setInput({ ...input, address: e.target.value })
                      }
                      placeholder="Enter your Address"
                    ></textarea>
                  </div>

                  <div className="text-sm text-center font-f1 mt-3 lg:mt-4 xl:mt-5 2xl:mt-auto">
                    By clicking submit,{" "}
                    <span className="text-[#023020] font-bold underline">
                      I agree to Terms and Conditions & Privacy Policy
                    </span>
                  </div>
                  <div className="mt-4 lg:mt-5 xl:mt-6 font-f1  ">
                    <button className="border border-[#A6A6A6] bg-[#A6A6A6] p-2.5 lg:p-3 xl:p-3.5 2xl:p-auto w-full rounded-xl text-white font-bold hover:bg-[#b6b6b2] mb-12">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
