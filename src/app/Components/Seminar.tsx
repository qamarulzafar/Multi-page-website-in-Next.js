import React from "react";
import Image from "next/image";
import SeminarPic from "../Images/Seminar.jpg";

const Seminar = () => {
  return (
    <div className="w-full  flex justify-center items-center p-5 py-20 md:px-10">
      <div className="w-full max-w-screen-lg">
        <Image
          src={SeminarPic}
          alt="SeminarImage"
          layout="responsive"
          width={900}
         // Set an appropriate aspect ratio for the image
          className="rounded-3xl h-1/2 object-cover min-h-[60vh]"
        />
      </div>
    </div>
  );
};

export default Seminar;
