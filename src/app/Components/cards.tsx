import React from "react";
import Card from "./card";

interface planstype {
  price: number;
  access: string;
  features: string[];
}

const plans: planstype[] = [
  {
    price: 12,
    access: "Free Access",
    features: [
      "Access to All Sessions",
      "Standard Networking Opportunities",
      "Conference Materials",
    ],
  },{
    price: 26,
    access: "Premium Access",
    features: [
      "Access to All Sessions",
      "Standard Networking Opportunities",
      "Conference Materials",
      "Premium Conference Materials",
      "Exclusive Workshops",
    ],
  },{
    price: 99,
    access: "VIP Access",
    features: [
      "Access to All Sessions",
      "Standard Networking Opportunities",
      "Conference Materials",
      "VIP Lounge Access",
    ],
  }
];


const Cards = () => {
  return (
    <div className="flex justify-center  flex-col flex-wrap md:flex-row " >
      {plans.map((plan, ind) => (
        <Card
          key={ind}
          price={plan.price}
          access={plan.access}
          features={plan.features}
        />
      ))}
    </div>
  );
};

export default Cards;
