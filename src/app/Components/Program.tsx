import React from 'react'

interface Event {
    time: string;
    title: string;
    type: string;
    location: string;
    action: string;
  }

const Program:React.FC<Event> = ({time, title, type, location, action}) => {
  return (
    <div>
      <div className="font-sans events w-full flex flex-col lg:flex-row justify-between min-h-32 items-start gap-0 py-5 lg:py-0 lg:items-center border-t border-gray-400 ">
          <div className="event-info  flex flex-col sm:flex-row  gap-3 sm:gap-10 items-baseline">
            <p className="font-semibold text-slate-800">{time}</p>
            <p className="text-2xl font-semibold">{title}</p>
          </div>
          <div className="mt-3 sm:mt-0 event-location flex flex-col items-start sm:flex-row lg:flex-row gap-3 sm:gap-11 justify-between w-full  lg:w-auto sm:items-center">
            <div className="flex gap-14  font-semibold text-slate-700">
              <p>{type}</p>
              <p>{location}</p>
            </div>
            <p className="py-3 px-5 bg-fuchsia-400 text-base text-white rounded-3xl">
              {action}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Program
