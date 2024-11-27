import React from "react";

interface eventsProps {
  location : string;
  summery : string;
}


const EventIntro = ({location, summery} : eventsProps) => {
  return (
    <div>
      <div className="div w-full  h-auto my-28 px-5 md:px-10">
        <div className="programe pt-0 md:pt-11 ">
          <p className="text-lg font-sans py-3 font-semibold text-slate-800">
            {location}
          </p>
        </div>
        <div className="main-head">
          <p className=" text-6xl md:text-8xl md:leading-[90px] font-sans font-bold">
            {summery}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventIntro;
