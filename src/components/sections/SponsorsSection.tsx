import React from "react";

export const SponsorsSection = () => {
  const sponsors = [
    { name: "Google", logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" },
    { name: "Microsoft", logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" },
    { name: "Amazon", logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" },
    { name: "Meta", logo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" },
    { name: "Netflix", logo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" },
    { name: "Spotify", logo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" },
  ];

  const industryLogos = [
    "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
  ];

  return (
    <section className="w-full py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-8">
        {/* Previous Sponsors */}
        <h3 className="text-center mb-16 font-sans font-normal text-[77.7px]">
          <span className="text-primary">Our previous </span>
          <span className="font-medium text-[#4285f4]">Sponsors</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <img
                className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                alt={sponsor.name}
                src={sponsor.logo}
              />
            </div>
          ))}
        </div>

        {/* Industry Experts */}
        <h3 className="text-center mb-16 font-sans font-normal text-[77.7px]">
          <span className="text-primary">Joined by </span>
          <span className="font-medium text-[#4285f4]">Industry Experts</span>
          <span className="text-primary"> from</span>
        </h3>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industryLogos.map((logo, index) => (
              <div
                key={index}
                className="aspect-video bg-secondary rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  alt={`Industry partner ${index + 1}`}
                  src={logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};