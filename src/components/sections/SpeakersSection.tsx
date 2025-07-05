import React from "react";

export const SpeakersSection = () => {
  const speakers = [
    {
      name: "Rohan Mishra",
      position: "Founder, Design Sundays and Arabica Studio",
      bgColor: "bg-[#ff5145]",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=233&h=425&fit=crop"
    },
    {
      name: "Arpan Garg",
      position: "Founder, Commudle",
      bgColor: "bg-[#4285f4]",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=233&h=425&fit=crop"
    },
    {
      name: "Ansh Mehra",
      position: "Product Marketer, Zuddl & Youtuber",
      bgColor: "bg-[#34a853]",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=233&h=425&fit=crop"
    },
    {
      name: "Saurabh Rajpal",
      position: "India Lead, Web Ecosystem Consulting, Google",
      bgColor: "bg-[#ff5145]",
      image: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=233&h=425&fit=crop"
    },
    {
      name: "Priya Sharma",
      position: "Senior Developer Advocate, Microsoft",
      bgColor: "bg-[#4285f4]",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=233&h=425&fit=crop"
    },
    {
      name: "Rahul Kumar",
      position: "Tech Lead, Amazon Web Services",
      bgColor: "bg-[#34a853]",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=233&h=425&fit=crop"
    },
  ];

  return (
    <section className="w-full py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center mb-16 font-sans font-medium text-primary text-[82.9px]">
          Star Speakers
        </h2>

        <div className="flex gap-[29px] justify-center overflow-x-auto pb-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0 group">
              <div className={`w-[233px] h-[588px] ${speaker.bgColor} rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                <div className="w-full h-[163px] bg-gradient-to-b from-transparent to-black/20" />
                <img
                  className="w-full h-[425px] object-cover"
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