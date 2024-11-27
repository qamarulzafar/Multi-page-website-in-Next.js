import React from "react";
import Mono from "./Mono";

interface heroProp {
  location : string;
  Event: string;
  about : string;
}

const Hero = ({location, Event, about} : heroProp) => {
  return (
    <div>
      <div className="hero px-5 text-center sm:text-left md:px-10 pt-10 flex justify-center items-center sm:items-start gap-10 md:gap-0 flex-col h-auto w-full md:flex-row">
        <div className="side-1">
          <div className="programe py-8">
            <p className="text-lg font-sans font-bold">
              {location}
            </p>
          </div>
          <div className="main-head">
            <p className=" text-5xl md:text-8xl md:leading-[90px] font-sans font-bold">
              {Event}
            </p>
          </div>
          <div className="aboutprograme mt-7 text-lg text-neutral-600">
            <p className="font-light md:w-2/3">
              {about}
            </p>
          </div>
        </div>
        <Mono/>
      </div>
    </div>
  );
};

export default Hero;
