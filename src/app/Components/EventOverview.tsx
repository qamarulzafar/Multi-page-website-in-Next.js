import React from "react";

const EventOverview = () => {
  return (
    <div>
      <div className="pt-20 w-full h-auto px-5 sm:px-10 md:px-20 ">
        <div>
          <p className=" text-3xl sm:text-5xl md:text-6xl font-normal md:font-semibold">
            Whether youre looking to learn from the best, share ideas, or make
            new connections, this is the event where thought leaders come
            together to shape the future.
          </p>
        </div>
        <div className="mt-20 gap-10 md:gap-0 flex justify-between items-center md:items-start flex-col md:flex-row">
          <div className="expertSpeacker ">
            <div className="count flex justify-center items-center">
              <p className="text-6xl md:text-8xl">7</p>
              <span className="text-4xl md:text-7xl">+</span>
            </div>
            <div className="name text-lg">Expert Speakers</div>
          </div>
          <div className="successfulEvents">
            <div className="count flex justify-center items-center">
              <p className="text-6xl md:text-8xl">40</p>
              <span className="text-4xl md:text-7xl">+</span>
            </div>
            <div className="name text-lg">Successful Events</div>
          </div>
          <div className="companyMembers">
            <div className="count flex justify-center items-center">
              <p className="text-6xl md:text-8xl">100</p>
              <span className="text-4xl md:text-7xl">+</span>
            </div>
            <div className="name text-lg">Company Members</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
