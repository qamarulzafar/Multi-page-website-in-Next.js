import React from 'react'
import Image from "next/image";
import monogram from "../Images/monogram.svg";
import mono_bg from "../Images/mono-bg.svg";
import arrow from "../Images/arrow.svg";

const Mono = () => {
  return (
    <div>
      <div className="mono ">
          <div className="relative w-[180px] h-[180px] max-w-[400px] min-w-[180px]">
            <Image
              src={mono_bg}
              alt="mono-bg"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
            <Image
              src={monogram}
              alt="monogram"
              className="absolute inset-0 w-[140px] h-[140px] object-cover z-20 m-auto left-0 right-0 top-0 bottom-0 animate-spin-slow "
            />
            <Image
              src={arrow}
              alt="arrow"
              className="absolute w-[60px] h-[60px] inset-0 object-cover m-auto z-10"
            />
          </div>
        </div>
    </div>
  )
}

export default Mono



