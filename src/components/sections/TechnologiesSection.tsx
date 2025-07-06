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
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex items-center justify-center">
            <div>
              <img
                src="/src/assets/TechnologiesSection/Image/gdg_noida_main.png"
                alt="GDG Noida Community"
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-12">
            {/* What is GDG Noida about section */}
            <div>
              <h3 className="font-sans font-normal text-5xl mb-6">
                <span className="text-gray-800">What is </span>
                <span className="font-bold text-[#f9ab00]">GDG Noida</span>
                <span className="text-gray-800"> about?</span>
              </h3>
              <p className="font-sans font-normal text-gray-600 text-[18px] leading-[28px]">
                Our flagship annual fest, DevFest Noida, is the ultimate
                celebration of technology, bringing together professionals and
                students, communities and leaders, tech giants, and emerging
                startups, to foster deeper connections with technology as well
                as one another.
              </p>
            </div>

            {/* Technologies covered section */}
            <div>
              <h3 className="font-sans font-normal text-5xl mb-6">
                <span className="font-bold text-[#f9ab00]">Technologies</span>
                <span className="text-gray-800"> covered</span>
              </h3>
              <p className="font-sans font-normal text-gray-600 text-[18px] leading-[28px]">
                Our spotlight is on cutting-edge AI innovations, featuring
                Google's Gemini, TensorFlow, AutoML, Bard, and Vertex AI. We
                also delve deep into technologies like Android, Flutter and
                Angular, alongside tools and technologies for Product Design &
                Management, Entrepreneurship, AR/VR, Web3, Blockchain, and a lot
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
