import React from "react";
import Teams from "./Components/Teams";
import EventOverview from "./Components/EventOverview";
import Seminar from "./Components/Seminar";
import EventIntro from "./Components/EventIntro";
import Programs from "./Components/Programs";
import Cards from "./Components/cards";
import Questions from "./Components/Questions";
import HeroProp from "./Components/HeroProp";


const Page = () => {
  return (
    <div>
      <HeroProp/>
      <Teams />
      <EventOverview />
      <Seminar />
      <EventIntro
        location="October 15-16 | San Francisco + online"
        summery="Where today's innovations shape tomorrow's world"
      />
      <Programs />
      <EventIntro
        location="October 15-16 | San Francisco + online"
        summery="Maximize your event experience with our pricing tiers"
      />
     <Cards/>
     <Questions/>
    </div>
  );
};

export default Page;
