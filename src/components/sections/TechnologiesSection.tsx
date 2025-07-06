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

  const techIcons = [
    { name: "Chrome", icon: "/src/assets/TechnologiesSection/svg/chrome.svg" },
    {
      name: "Android",
      icon: "/src/assets/TechnologiesSection/svg/android.svg",
    },
    {
      name: "Firebase",
      icon: "/src/assets/TechnologiesSection/svg/firebase.svg",
    },
    {
      name: "Flutter",
      icon: "/src/assets/TechnologiesSection/svg/flutter.svg",
    },
    {
      name: "Assistant",
      icon: "/src/assets/TechnologiesSection/svg/assistant.svg",
    },
    {
      name: "Google Cloud",
      icon: "/src/assets/TechnologiesSection/svg/google_cloud.svg",
    },
    {
      name: "TensorFlow",
      icon: "/src/assets/TechnologiesSection/svg/tensor-flow.svg",
    },
    { name: "Figma", icon: "/src/assets/TechnologiesSection/svg/figma.svg" },
    { name: "Gemini", icon: "/src/assets/TechnologiesSection/svg/gemini.svg" },
    { name: "Web", icon: "/src/assets/TechnologiesSection/svg/web.svg" },
    {
      name: "Gemini+",
      icon: "/src/assets/TechnologiesSection/svg/gemini+.svg",
    },
    { name: "Web3", icon: "/src/assets/TechnologiesSection/svg/web3.svg" },
    { name: "GCLI", icon: "/src/assets/TechnologiesSection/svg/gcli.svg" },
    { name: "Meets", icon: "/src/assets/TechnologiesSection/svg/meets.svg" },
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

        {/* Technologies Icons Grid */}
        <div className="mt-20">
          <div className="grid grid-cols-7 gap-8 items-center justify-items-center">
            {techIcons.map((tech, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
