import React from "react";
import MidCard from "../Components/Cards/MidCard";
import TextOnly from "../Components/Cards/TextOnly";

function EleventhSection() {
  const getMidCards = () => [
    {
      link: "/your-link-url",
      imageSrc: "images/EleventhSection/11.jpg",
      text: "This ‘American Gandhi’ never got the attention he deserved because he was gay. A new film may change that",
      tag: "ANALYSIS",
      color: "white",
    },
    // Add more cards as needed
  ];

  const getTextOnlyCards = () => [
    {
      link: "/your-link-url",
      text: "Hundreds of thousands of galaxies fill a single image taken by new telescope",
      color: "white",
    },
    {
      link: "/your-link-url",
      text: "The water has turned a shocking shade of magenta in this Hawaii refuge",
      color: "white",
    },
    {
      link: "/your-link-url",
      text: "China blames Canada for ‘malicious, provocative’ moves after close midair intercepts over South China Sea",
      color: "white",
    },
    {
      link: "/your-link-url",
      text: "You can rent Martha’s Stewart’s farm guesthouse — for just $11.23",
      color: "white",
    },
    {
      link: "/your-link-url",
      text: "Caster Semenya says taking testosterone-reducing medication was ‘hell’",
      color: "white",
    },
    {
      link: "/your-link-url",
      text: "Inside Dolly Parton’s new resort lodge in the Tennessee mountains",
      color: "white",
    },
    {
      link: "/your-link-url",
      text: "CNN Exclusive Chinese jet fired flares close to submarine-hunting helicopter in South China Sea, Canadian Navy says",
      color: "white",
    },
    {
      link: "/your-link-url",
      text: "Mosquitoes are driving these birds to extinction. With only 5 left in the wild, scientists are racing to save the species",
      color: "white",
    },
  ];

  const midCards = getMidCards();
  const textOnlyCards = getTextOnlyCards();

  return (
    <div>
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl bg-black text-white font-bold">
        In Case You Missed It
      </h2>
      <div className="flex flex-wrap bg-black">
        {/* First Column (2 parts) */}
        <div className="w-full md:w-3/5 p-4 text-white">
          {midCards.map((card, index) => (
            <div key={index} className="mb-4">
              <MidCard
                {...card}
                style={{ color: "white" }} // Override text color for this instance
              />
            </div>
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full md:w-2/5 p-4">
          {/* Content for the second column */}
          {textOnlyCards.map((card, index) => (
            <TextOnly 
              key={index} {...card} 
              style={{ color: "white" }} 
            />
          ))}
        </div>

        {/* Third Column (1 part) */}
      </div>
      <div className="bg-black pb-6 flex items-center justify-center flex-col">
        <img
          src="/images/EleventhSection/adv.jpg"
          alt="adv"
          className="w-full"
        />
        <p className="text-zinc-600 text-xs self-start mt-1 adv-level">
          Advertisement
        </p>
      </div>
    </div>
  );
}

export default EleventhSection;
