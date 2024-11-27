import React from "react";
import { VscCheck } from "react-icons/vsc";
import { GiPowerLightning } from "react-icons/gi";

interface planstype {
  price: number;
  access: string;
  features: string[];
}

const Card: React.FC<planstype> = ({ price, access, features }) => {
  return (
    <div>
      <div className="card p-4">
        <div className=" w-full md:w-96 h-auto sm:min-h-[730px]  bg-white p-5 md:p-10 flex flex-col">
          <div className="circle w-7 h-7 text-white text-xs rounded-full flex justify-center items-center object-cover  bg-fuchsia-400 ">
            <GiPowerLightning />
          </div>
          <div className="price">
            <p className="text-6xl py-5 font-bold">${price}</p>
          </div>
          <div className="access">
            <p className="text-4xl py-2 font-semibold font-sans">{access}</p>
          </div>
          <div className="plan">
            <p className="text-gray-500 py-3">All Standerd plans includes :</p>
          </div>
          <div>
            <ul className="plans py-5">
              {features && features.length > 0 ? (
                features.map((feature, index) => (
                  <div className="div flex items-center gap-2">
                    <div className="icon w-6 h-6 bg-black rounded-full flex justify-center items-center">
                      <VscCheck className="text-white text-base" />
                    </div>
                    <li key={index} className="text-black py-3 text-lg">
                      {feature}
                    </li>
                  </div>
                ))
              ) : (
                <p>No features available.</p>
              )}
            </ul>
          </div>
          <div className="button mt-auto ">
            <button className="py-3 w-full bg-black text-white rounded-3xl">BUY TICKETS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
