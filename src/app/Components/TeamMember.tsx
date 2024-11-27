import Image from "next/image";
import React from "react";
import { GiArrowWings } from "react-icons/gi";
import { StaticImageData } from 'next/image';



interface TeamMemberType {
    name: string;
    description: string;
    date: string;
    image: StaticImageData ; // Type used by Next.js for imported images
    isThirdMember : boolean;
  }





const TeamMember: React.FC<TeamMemberType> = ({name, description, date, image, isThirdMember}) => {


    
    return (
        <div>
            <div className="card group">
                <div className="max-w-2xl   overflow-hidden shadow-lg  text-white relative">
                    <div className="relative h-[500px] ">
                        <Image
                            src={image}
                            alt="john"
                            layout="fill"
                            objectFit="cover"
                            className="transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="flex justify-between items-center absolute top-2 left-0 text-white p-5 w-full ">
                            <p className={`border-[0.01em] border-slate-600 rounded-3xl px-3 py-3  ${isThirdMember  ? "text-black" : "text-white"} `}>
                                {date}
                            </p>
                            <GiArrowWings className="text-white text-2xl transition-all duration-300 hover:translate-Z-3 group-hover:rotate-45" />
                        </div>
                        <div className="p-5 absolute bottom-0 text-white">
                            <h1 className={`text-3xl font-extrabold ${isThirdMember ? "text-black" : "text-white"} `}>{name}</h1>
                            <p className={`${isThirdMember ? "hidden" : "block"}`}>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
