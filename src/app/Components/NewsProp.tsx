import React from "react";
import { StaticImageData } from "next/image";
import NewsImage1 from "../Images/NewsImage1.jpeg";
import NewsImage2 from "../Images/NewsImage2.jpeg";
import NewsImage3 from "../Images/NewsImage3.jpeg";
import NewsImage4 from "../Images/NewsImage4.jpeg";
import NewsImage5 from "../Images/NewsImage5.jpeg";
import NewsImage6 from "../Images/NewsImage6.jpeg";
import News from "./News";

interface NewsType {
  image: StaticImageData;
  imageTitle: string; 
}

const NewsProp: React.FC = () => {
  const Newsprops: NewsType[] = [
    {
      image: NewsImage1,
      imageTitle: "5 Web Design Blogs You Should Be Reading",
    },
    {
      image: NewsImage2,
      imageTitle: "7 of the Best Examples of Beautiful Blog Design",
    },
    {
      image: NewsImage3,
      imageTitle: "7 Things About Web Design Your Boss Wants To Know",
    },
    {
      image: NewsImage4,
      imageTitle: "7 Ways To Improve Website Usability And Accessibility",
    },
    {
      image: NewsImage5,
      imageTitle: "10 Great Examples of Responsive Websites",
    },
    {
      image: NewsImage6,
      imageTitle: "5 Principles Of Effective Web Design",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mx-5 md:mx-12" >
      {Newsprops.map((NewsData, ind) => (
        <News
          key={ind}
          image={NewsData.image}
          imageTitle={NewsData.imageTitle}
        />
      ))}
    </div>
  );
};

export default NewsProp;
