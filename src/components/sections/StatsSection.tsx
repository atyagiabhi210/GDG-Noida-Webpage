import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "../ui/card";

// Custom hook for counter animation
const useCounterAnimation = (
  targetValue: number,
  duration: number = 2000,
  shouldStart: boolean = false
) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!shouldStart || isAnimating || hasAnimated) return;

    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const newValue = Math.floor(
        startValue + (targetValue - startValue) * easeProgress
      );
      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration, shouldStart, isAnimating, hasAnimated]);

  return currentValue;
};

// Custom hook for intersection observer
const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting] as const;
};

// Helper function to extract number from string and format it back
const parseStatValue = (value: string) => {
  const match = value.match(/(\d+(?:\.\d+)?)/);
  const number = match ? parseFloat(match[1]) : 0;
  const suffix = value.replace(/[\d.]/g, "");
  return { number, suffix };
};

const formatStatValue = (currentNumber: number, originalValue: string) => {
  const { suffix } = parseStatValue(originalValue);
  return `${currentNumber}${suffix}`;
};

export const StatsSection = () => {
  const [sectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: "-50px",
  });

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

        <div
          ref={sectionRef}
          className="grid grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {statsCards.map((stat, index) => {
            const { number: targetNumber } = parseStatValue(stat.value);
            const animatedNumber = useCounterAnimation(
              targetNumber,
              2000,
              isIntersecting
            );
            const displayValue = formatStatValue(animatedNumber, stat.value);

            return (
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
                      {displayValue}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
