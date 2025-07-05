import React from "react";
import { Card, CardContent } from "../ui/card";

export const StatsSection = () => {
  const statsCards = [
    {
      value: "21K+",
      label: "Community Members",
      bgColor: "bg-[#4285f4]",
      size: "large",
    },
    {
      value: "30+",
      label: "Events hosted till now",
      bgColor: "bg-[#34a853]",
      size: "small",
    },
    {
      value: "50+",
      label: "Partners & Sponsors",
      bgColor: "bg-[#ff5145]",
      size: "small",
    },
    {
      value: "7K+",
      label: "Social media Followers",
      bgColor: "bg-[#ffba00]",
      size: "small",
    },
    {
      value: "200+",
      label: "Speaker Sessions",
      bgColor: "bg-[#4285f4]",
      size: "small",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-center mb-16 font-sans font-bold text-primary text-[60.1px]">
          Our Insights
        </h3>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {statsCards.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.bgColor} ${
                index === 0
                  ? "col-span-1 row-span-2 h-[423px] rounded-[32.77px]"
                  : "h-[204px] rounded-[15.86px]"
              } overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <CardContent className="p-0 flex items-center justify-center h-full">
                <div className="text-center">
                  <div
                    className={`font-sans font-normal text-white ${
                      index === 0
                        ? "text-[118px] leading-[176.9px]"
                        : "text-6xl leading-[89.9px]"
                    } whitespace-nowrap`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`font-sans font-normal text-white text-center ${
                      index === 0
                        ? "text-[49.2px] max-w-[434px]"
                        : "text-[25.4px] max-w-[199px]"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};