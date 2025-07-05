import React from "react";
import { Card, CardContent } from "../ui/card";

export const AboutSection = () => {
  const infoCards = [
    {
      content: (
        <>
          <span className="font-normal text-primary text-[24.7px] tracking-[0] leading-[33.8px]">
            We{" "}
          </span>
          <span className="font-bold text-[#4285f4]">launched</span>
          <span className="font-normal text-primary text-[24.7px] tracking-[0] leading-[33.8px]">
            {" "}
            GDG Noida in 2022, hosting a range of events to empower the
            developer community in Noida which is now 21K+ members strong.
          </span>
        </>
      ),
    },
    {
      content: (
        <>
          <span className="font-normal text-primary text-[25.6px] tracking-[0] leading-[38.4px]">
            GDG Noida is a vibrant tech community located in{" "}
          </span>
          <span className="font-bold text-[#34a853]">Uttar Pradesh's Noida</span>
          <span className="font-normal text-primary text-[25.6px] tracking-[0] leading-[38.4px]">
            , one of the leading IT hubs in the country.
          </span>
        </>
      ),
    },
    {
      content: (
        <>
          <span className="font-normal text-primary text-[25.6px] tracking-[0] leading-[34.7px]">
            Our goal is to fuel continuous growth and learning for{" "}
          </span>
          <span className="font-bold text-[#ff5145]">developers</span>
          <span className="font-normal text-primary text-[25.6px] tracking-[0] leading-[34.7px]">
            ,{" "}
          </span>
          <span className="font-bold text-[#ffba00]">entrepreneurs</span>
          <span className="font-normal text-primary text-[25.6px] tracking-[0] leading-[34.7px]">
            ,{" "}
          </span>
          <span className="font-bold text-[#4285f4]">designers</span>
          <span className="font-normal text-primary text-[25.6px] tracking-[0] leading-[34.7px]">
            ,{" "}
          </span>
          <span className="font-bold text-[#34a853]">leaders</span>
          <span className="font-normal text-primary text-[25.6px] tracking-[0] leading-[34.7px]">
            , and{" "}
          </span>
          <span className="font-bold text-[#ff5145]">students</span>
          <span className="font-normal text-primary text-[25.6px] tracking-[0] leading-[34.7px]">
            {" "}
            in our community.
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center mb-16 font-sans font-normal text-[40px]">
          <span className="text-primary">Know Google Developers Group </span>
          <span className="text-[#4285f4] font-bold">Noida</span>
        </h2>

        {/* Info Cards */}
        <div className="flex gap-[50px] justify-center mb-20">
          {infoCards.map((card, index) => (
            <Card
              key={index}
              className={`w-[484px] h-[576px] ${
                index === 0 ? "mt-[147px]" : index === 1 ? "mt-0" : "mt-[147px]"
              } bg-white rounded-[8px_50px_8px_50px] border-[1.98px] border-solid border-primary hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <CardContent className="p-0">
                <div className="w-[421px] h-[315px] mx-auto mt-[34px] bg-secondary rounded-lg flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    alt="Community"
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? "1181467" : index === 1 ? "3184291" : "3184292"
                    }/pexels-photo-${
                      index === 0 ? "1181467" : index === 1 ? "3184291" : "3184292"
                    }.jpeg?auto=compress&cs=tinysrgb&w=421&h=315&fit=crop`}
                  />
                </div>
                <div className="w-[380px] mx-auto mt-[35px] text-center font-sans">
                  {card.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Events Counter */}
        <div className="text-center mb-20">
          <div className="font-sans font-bold text-primary text-9xl">
            30+ Events
          </div>
        </div>
      </div>
    </section>
  );
};