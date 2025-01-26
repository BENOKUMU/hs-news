import React from "react";
import { Link } from "react-router-dom";
import MidCard from "../Components/Cards/MidCard";
import TextOnly from "../Components/Cards/TextOnly";

const FirstSection = () => {
  const MidCards = [
    {
      link: "/live/Israel-hamas-war",
      imageSrc: "images/FirstSection/analysis.jpg",
      text: "Rishi Sunak is picking a fight on the migration issue that he probably cannot win",
      tag: "Analysis",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/FirstSection/news3.jpg",
      text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "images/FirstSection/news2.jpg",
      text: "Harvard president apologizes for her disastrous testimony at antisemitism hearing",
      tag: "",
    },
  ];

  const textOnly = [
    {
      link: "/your-link-url",
      text: "Michigan school shooter sentenced to life in prison without parole",
    },
    {
      link: "/your-link-url",
      text: "Six French teenagers convicted in connection with 2020 beheading of teacher Paty",
    },
    {
      link: "/your-link-url",
      text: "Appeals court maintains most of Trump gag order in federal election subversion case",
    },
    {
      link: "/your-link-url",
      text: "Ryan O’Neal, star of ‘Love Story’ and ‘Peyton Place,’ dead",
    },
    {
      link: "/your-link-url",
      text: "Wartime spread of drug-resistant infections in Ukraine is an ‘urgent crisis,’ CDC report says",
    },
    {
      link: "/your-link-url",
      text: "European Union agrees to regulate potentially harmful effects of artificial intelligence",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-2/3 p-4">
        <Link to="/new-link">
          <div className="max-w-screen-md mx-auto p-8">
            <h1 className="text-5xl font-bold mb-4 text-black text-center hover:underline">
              Five Key Takeaways from the fourth GOP debate
            </h1>
            <div className="max-w-screen-md mx-auto mb-3">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-full rounded-md"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="/videos/FirstSection/breaking.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2 underline">
              Perhaps most telling about the state of the race was how
              candidates reacted to Christie’s remarks criticizing Trump
            </h4>
            <ul className="list-disc px-5">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Aut tempora libero repudiandae obcaecati sapiente natus.</li>
              <li>Veritatis illo laboriosam quis porro at soluta!</li>
              <li>Error laudantium illo eos molestiae, velit nemo?</li>
              <li>Blanditiis ab impedit enim praesentium distinctio quam?</li>
            </ul>
          </div>
        </Link>
      </div>

      {/* Middle Section */}
      <div className="w-full md:w-1/3 p-4 space-y-4">
        {MidCards.map((card, index) => (
          <MidCard key={index} {...card} />
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 p-4 ">
        <Link to="/news-link" className="relative w-305 h-171 group mb-4">
          <video
            className="w-full rounded-sm"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src="/videos/FirstSection/video.mp4" />
          </video>
        </Link>
        <div className="mb-2 mt-2 font-bold text-xl hover:underline">
            Catch up on todays global news
        </div>
        <div>
            {
                textOnly.map((card, index)=>(
                    <TextOnly key={index} {...card} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
