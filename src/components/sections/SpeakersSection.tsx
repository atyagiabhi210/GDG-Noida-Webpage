import React from "react";

export const SpeakersSection = () => {
  const speakers = [
    {
      name: "Rohan Mishra",
      position: "Founder, Design Sundays and Arabica Studio",
      bgColor: "bg-[#ff5145]",
      image: "/src/assets/Star-speakers/images/rohan_mishra.png",
    },
    {
      name: "Arpan Garg",
      position: "Founder, Commudle",
      bgColor: "bg-[#4285f4]",
      image: "/src/assets/Star-speakers/images/arpan_garg.png",
    },
    {
      name: "Ansh Mehra",
      position: "Product Marketer, Zuddl & Youtuber",
      bgColor: "bg-[#34a853]",
      image: "/src/assets/Star-speakers/images/anshmehra.png",
    },
    {
      name: "Saurabh Rajpal",
      position: "India Lead, Web Ecosystem Consulting, Google",
      bgColor: "bg-[#ff5145]",
      image: "/src/assets/Star-speakers/images/saurabh-rajpal.png",
    },
    {
      name: "Arpan Garg",
      position: "Founder, Commudle",
      bgColor: "bg-[#4285f4]",
      image: "/src/assets/Star-speakers/images/arpan_garg.png",
    },
    {
      name: "Ansh Mehra",
      position: "Product Marketer, Zuddl & Youtuber",
      bgColor: "bg-[#34a853]",
      image: "/src/assets/Star-speakers/images/anshmehra.png",
    },
    {
      name: "Saurabh Rajpal",
      position: "India Lead, Web Ecosystem Consulting, Google",
      bgColor: "bg-[#ff5145]",
      image: "/src/assets/Star-speakers/images/saurabh-rajpal.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-secondary relative overflow-hidden">
      {/* Background SVG */}
      <div className="h-full absolute top-0 right-0  w-auto opacity-80">
        <img
          src="/src/assets/Star-speakers/star-speaker-bg.svg"
          alt=""
          className="h-full w-auto object-cover object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-center mb-16 font-sans font-medium text-primary text-[82.9px]">
          Star Speakers
        </h2>

        <div className="flex gap-[29px] justify-center overflow-x-auto pb-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 group"
            >
              <div
                className={`w-[233px] h-[588px] ${speaker.bgColor} rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative`}
              >
                <div className="w-full h-[163px] bg-gradient-to-b from-transparent to-black/20" />
                <img
                  className="w-full h-[425px] object-cover object-center"
                  alt={speaker.name}
                  src={speaker.image}
                />
              </div>
              <div className="mt-[35px] flex flex-col items-center gap-2.5 text-center">
                <h4 className="font-sans font-normal text-primary text-2xl font-medium">
                  {speaker.name}
                </h4>
                <p className="w-44 font-sans font-normal text-muted-foreground text-xl text-center leading-[27.2px]">
                  {speaker.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
