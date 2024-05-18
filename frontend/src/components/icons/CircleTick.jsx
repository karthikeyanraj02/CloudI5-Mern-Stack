import React from "react";

export default function CircleTick() {
  return (
    <div>
      <svg
        class=" w-4 h-4  md:w-5 md:h-5  lg:w-6 lg:h-6  xl:w-6.5 xl:h-6.5 2xl:w-10 2xl:10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11" stroke="#006743" stroke-width="2" />
        <path
          d="M6 12.5625C7.25217 13.9125 8.50435 15.2625 9.65217 16.5C12.4696 13.4625 15.287 10.425 18 7.5"
          stroke="#006743"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
