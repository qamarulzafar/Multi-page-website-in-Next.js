import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface NewsType {
    image : StaticImageData;
    imageTitle : string;
  }

const News:React.FC<NewsType> = ({image, imageTitle}) => {
  return (
    <div>
      <div className="md:mx-3">
        <div className="relative h-[250px] rounded-2xl overflow-hidden mt-10 md:mt-20">
          <Image
            src={image}
            alt="NesImg"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:scale-105"
          />
        </div>
        <div>
          <p className="text-2xl p-3 pr-2 mt-5 md:pr-52">
           {imageTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
