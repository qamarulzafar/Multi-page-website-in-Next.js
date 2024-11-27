import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  return (
    <div>
      <div>
        <div className="head flex justify-center ">
          <h1 className="text-6xl font-semibold w-full md:w-2/5 text-center py-7 mt-20">
            Frequently asked question
          </h1>
        </div>
      </div>

      <div className="askQuestion px-4 md:px-14 mt-10 font-sans flex flex-col gap-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="bg-zinc-200 p-5 rounded-xl ">
            <AccordionTrigger className="text-lg">What is the conference date and location?</AccordionTrigger>
            <AccordionContent className="pt-5 text-lg text-neutral-500">
            The event will take place on April 12-14, 2024 at the New York City Convention Center. Please visit our Location page for more details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="bg-zinc-200 p-5 rounded-xl">
            <AccordionTrigger className="text-lg">How can I register for the conference?</AccordionTrigger>
            <AccordionContent className="pt-5 text-lg text-neutral-500">
            You can register directly through our website by visiting the Registration page. Early bird discounts are available for a limited time!
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="bg-zinc-200 p-5 rounded-xl">
            <AccordionTrigger className="text-lg">Are there virtual attendance options?</AccordionTrigger>
            <AccordionContent className="pt-5 text-lg text-neutral-500">
            Yes, we offer both in-person and virtual attendance options. Please choose your preference during registration.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="bg-zinc-200 p-5 rounded-xl">
            <AccordionTrigger className="text-lg">Will there be networking opportunities?</AccordionTrigger>
            <AccordionContent className="pt-5 text-lg text-neutral-500">
            Absolutely! Weve scheduled multiple networking sessions, including breaks, luncheons, and evening mixers to ensure plenty of time for connecting with fellow attendees.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="bg-zinc-200 p-5 rounded-xl">
            <AccordionTrigger className="text-lg">Can I cancel or transfer my ticket?</AccordionTrigger>
            <AccordionContent className="pt-5 text-lg text-neutral-500">
            Cancellations are accepted up to 30 days before the event, with a full refund. You can also transfer your ticket to another attendee by contacting our support team.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
