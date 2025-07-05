import React from "react";

export const TechnologiesSection = () => {
  const technologies = [
    { name: "Android", color: "#34a853" },
    { name: "Flutter", color: "#4285f4" },
    { name: "TensorFlow", color: "#ff5145" },
    { name: "Angular", color: "#ffba00" },
    { name: "Firebase", color: "#ff5145" },
    { name: "Cloud", color: "#4285f4" },
    { name: "AI/ML", color: "#34a853" },
    { name: "Web3", color: "#ffba00" },
    { name: "AR/VR", color: "#ff5145" },
    { name: "Blockchain", color: "#4285f4" },
    { name: "Design", color: "#34a853" },
    { name: "Startup", color: "#ffba00" },
  ];

  return (
    <section className="w-full py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white border border-solid border-primary rounded-lg p-16">
          <div className="mb-12">
            <h3 className="font-sans font-normal text-5xl mb-6">
              <span className="text-primary">What is </span>
              <span className="font-bold text-[#f9ab00]">GDG Noida</span>
              <span className="text-primary"> about?</span>
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-[32px] leading-[48px]">
              Our flagship annual fest, DevFest Noida, is the ultimate
              celebration of technology, bringing together professionals and
              students, communities and leaders, tech giants, and emerging
              startups, to foster deeper connections with technology as well
              as one another.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-sans font-normal text-5xl mb-6">
              <span className="font-bold text-[#f9ab00]">Technologies</span>
              <span className="text-primary"> covered</span>
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-[32px] leading-[48px]">
              Our spotlight is on cutting-edge AI innovations, featuring
              Google's Gemini, TensorFlow, AutoML, Bard, and Vertex AI.
              We also delve deep into technologies like Android, Flutter and
              Angular, alongside tools and technologies for Product Design
              & Management, Entrepreneurship, AR/VR, Web3, Blockchain,
              and a lot more.
            </p>
          </div>

          {/* Technology Icons */}
          <div className="grid grid-cols-6 gap-8 justify-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-[85px] h-[85px] bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-transparent hover:border-primary"
                style={{ backgroundColor: `${tech.color}20` }}
              >
                <span 
                  className="font-sans font-medium text-sm text-center"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};