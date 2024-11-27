import React from "react";
import Hero from "../Components/Hero";
import News from "../Components/News";
import NewsProp from "../Components/NewsProp";

const Page = () => {
  return (
    <div>
      <Hero
        location="October 15-16 | San Francisco + online"
        Event="Your source for the latest conference news and insights"
        about="Our blog covers the latest trends, speaker highlights, and everything you need to know to make the most of your conference experience."
      />
      <NewsProp/>
    </div>
  );
};

export default Page;
