import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface SpeakerProps {
    image: StaticImageData;
    name: string;
    occupation: string;
}

const Speaker:React.FC<SpeakerProps> = ({image , name, occupation}) => {
    return (
        <div>
            <div>
                <div className="relative w-[350px] h-[250px] overflow-hidden rounded-2xl">
                    <Image
                        src={image}
                        alt="John Doe"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div className="p-3">
                    <p className="text-2xl" >{name}</p>
                    <p className="text-zinc-700">{occupation}</p>
                </div>
            </div>

        </div>
    );
};

export default Speaker;
