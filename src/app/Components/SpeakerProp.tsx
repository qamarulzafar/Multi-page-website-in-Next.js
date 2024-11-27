import React from "react";
import JohnDoe from "../Images/John DOE.jpg";
import DAVID from "../Images/DAVID GREEN.jpg";
import EMILY from "../Images/EMILY WHITE.jpg";
import JAHN from "../Images/JAHN SMITH.jpg";
import MICHAEL from "../Images/MICHAEL BROWN.jpg";
import PRIVATE from "../Images/PRIVATE PARTY.jpg";
import { StaticImageData } from "next/image";
import Speaker from "./Speaker";

interface SpeakerProps {
  image: StaticImageData;
  name: string;
  occupation: string;
}

const SpeakerProp: React.FC = () => {
  const Speakers: SpeakerProps[] = [
    {
      name: "John ",
      occupation: "ARTIFICIAL INTELLIGENCE",
      image: JohnDoe,
    },
    {
      name: "Jane Smith",
      occupation: "DIGITAL MARKETING",
      image: JAHN,
    },
    {
      name: "Micheal Brown",
      occupation: "RENEWABLE ENERGY",
      image: MICHAEL,
    },
    {
      name: "Emily White",
      occupation: "CYBERSECURITY",
      image: EMILY,
    },
    {
      name: "David Green",
      occupation: "FINTECH",
      image: DAVID,
    },
    {
      name: "Samuel White",
      occupation: "MACHINE ENGINEERING",
      image: PRIVATE,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center my-10 gap-4">
        {Speakers.map((speaker) => (
          <Speaker
            key={speaker.name}
            name={speaker.name}
            occupation={speaker.occupation}
            image={speaker.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeakerProp;
