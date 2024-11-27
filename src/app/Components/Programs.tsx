import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Program from "./Program";

interface Event {
  time: string;
  title: string;
  type: string;
  location: string;
  action: string;
}

interface DateEvents {
  date: string;
  events: Event[];
}

const Programs: React.FC = () => {
  const datesWithEvents: DateEvents[] = [
    {
      date: "Friday 09 Feb",
      events: [
        {
          time: "8:00 AM",
          title: "Innovate 2024",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
        {
          time: "11:00 AM",
          title: "Future Leaders Summit",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
        {
          time: "2:00 PM",
          title: "InsightX Conference",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
      ],
    },
    {
      date: "Saturday 10 Feb",
      events: [
        {
          time: "8:00 AM",
          title: "The Visionary Forum",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
        {
          time: "11:00 AM",
          title: "Elevate: The Next Wave",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
        {
          time: "2:00 PM",
          title: "Summit of Tomorrow",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
      ],
    },
    {
      date: "Sunday 11 Feb",
      events: [
        {
          time: "8:00 AM",
          title: "The Growth Exchange",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
        {
          time: "11:00 AM",
          title: "Ideas Forward",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
        {
          time: "3:00 PM",
          title: "Connect 2024",
          type: "In-person",
          location: "London",
          action: "BUY TICKETS",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="main w-full px-6 md:px-14">
        {/* 1  */}

        <Accordion type="multiple" defaultValue={["item-0"]}>
          {datesWithEvents.map((dateItem, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <div className="date">
                <AccordionTrigger>
                  <p className="text-4xl font-sans font-semibold py-10">{dateItem.date}</p>
                </AccordionTrigger>
              </div>
              <AccordionContent>
                {dateItem.events.map((event, key) => (
                  <Program
                    key={key}
                    time={event.time}
                    title={event.title}
                    type={event.type}
                    location={event.location}
                    action = {event.action}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Programs;
