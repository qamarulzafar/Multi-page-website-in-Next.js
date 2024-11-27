import React from "react";
import Hero from "../Components/Hero";
import SpeakerProp from "../Components/SpeakerProp";


const Page = () => {
  return (
    <div>
      <Hero
        location="October 15-16 | San Francisco + online"
        Event="Introducing the experts leading the way"
        about="Get to know the visionaries, industry leaders, and innovators who will be sharing their knowledge and insights."
      />
      <SpeakerProp/>
    </div>
  );
};

export default Page;
