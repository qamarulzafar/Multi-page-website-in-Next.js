import React from "react";
import TeamMember from "./TeamMember";
import JohnDoe from "../Images/John DOE.jpg";
import DAVID from "../Images/DAVID GREEN.jpg";
import EMILY from "../Images/EMILY WHITE.jpg";
import JAHN from "../Images/JAHN SMITH.jpg";
import MICHAEL from "../Images/MICHAEL BROWN.jpg";
import PRIVATE from "../Images/PRIVATE PARTY.jpg";
import { StaticImageData } from "next/image";

interface TeamMemberType {
    name: string;
    description: string;
    date: string;
    image: StaticImageData; // Type used by Next.js for imported images
}

// Array of team members
const teamMembers: TeamMemberType[] = [
    {
        name: "JOHN DOE",
        description:
            "John Doe is a leading expert in artificial intelligence, focusing on machine learning algorithms and their applications in various industries.",
        date: "2024-11-05",
        image: JohnDoe,
    },
    {
        name: "JANE SMITH",
        description:
            "Jane Smith specializes in data science and big data analytics, with extensive experience in business intelligence.",
        date: "2024-11-06",
        image: JAHN, // Replace with correct image for Jane Smith
    },
    {
        name: "PRIVATE PARTY",
        description:
            "Alice Johnson is a cloud computing engineer who develops scalable cloud-based solutions and infrastructure.",
        date: "2024-11-07",
        image: PRIVATE, // Replace with correct image for Alice Johnson
    },
    {
        name: "EMILY WHITE ",
        description:
            "Emily White is a researcher in renewable energy technologies, focusing on sustainable solutions for a greener future.",
        date: "2024-11-07",
        image: EMILY, // Replace with correct image for Alice Johnson
    },
    {
        name: "DAVID GREEN",
        description:
            "David Green is a financial technology expert, specializing in blockchain and its impact on the financial services industry.",
        date: "2024-11-07",
        image: DAVID, // Replace with correct image for Alice Johnson
    },
    {
        name: "MICHAEL BROWN",
        description:
            "Michael Brown is a renowned cybersecurity expert, providing insights into the latest threats for organizations.",
        date: "2024-11-07",
        image: MICHAEL, // Replace with correct image for Alice Johnson
    },
    
    // Add more team members as needed
];

const Teams: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
            {/* Each TeamMember component will be placed into the grid */}
            {teamMembers.map((member, ind) => (
                <TeamMember
                    key={ind}
                    name={member.name}
                    description={member.description}
                    date={member.date}
                    image={member.image}
                    isThirdMember={ind === 2}
                />
            ))}
        </div>
    );
};

export default Teams;
