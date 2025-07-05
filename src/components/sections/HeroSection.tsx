import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="w-full h-[1117px] bg-secondary relative">
      {/* Hero Content */}
      <div className="absolute w-[688px] h-[287px] top-[271px] left-[132px]">
        <h1 className="absolute w-[686px] top-0 left-0 font-sans font-normal text-primary text-[80.3px] tracking-[1.61px] leading-tight">
          Google Developers Group
        </h1>
        <div className="absolute w-[419px] h-16 top-[223px] left-0">
          <Badge className="relative w-[417px] h-16 bg-white rounded-[56.49px] border-[1.97px] border-solid border-primary hover:bg-secondary transition-colors">
            <span className="w-[103px] font-sans font-normal text-[31.9px] text-primary">
              Noida
            </span>
          </Badge>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute w-[640px] h-[378px] top-[544px] right-[75px]">
        <div className="absolute w-[546px] h-5 top-[358px] left-[35px] bg-primary/20 rounded-[273px/10px] blur-[15px]" />
        <img
          className="absolute w-[640px] h-[372px] top-0 left-0 rounded-lg shadow-lg"
          alt="GDG Community"
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=640&h=372&fit=crop"
        />
      </div>

      {/* Hero Description */}
      <p className="absolute w-[791px] top-[645px] left-[139px] font-sans font-normal text-primary text-[28.7px] tracking-[0.57px] leading-relaxed">
        A Google Developers Group isn't just about code — it's about people who believe that together, we can build, learn, and inspire something bigger than ourselves.
      </p>

      {/* CTA Buttons */}
      <div className="absolute flex gap-[70px] top-[870px] left-[132px]">
        <Button
          variant="outline"
          className="w-[269px] h-[65px] rounded-[8.04px] border-[2.01px] border-solid border-primary hover:bg-[#4285f4] hover:text-white hover:border-[#4285f4] transition-all duration-300"
        >
          <span className="font-sans font-medium text-[25.2px] text-center tracking-[0.50px]">
            Upcoming Events
          </span>
        </Button>
        <Button
          variant="outline"
          className="w-[269px] h-[65px] rounded-[8.04px] border-[2.01px] border-solid border-primary hover:bg-[#34a853] hover:text-white hover:border-[#34a853] transition-all duration-300"
        >
          <span className="font-sans font-medium text-[25.2px] text-center tracking-[0.50px]">
            Collaborations
          </span>
        </Button>
      </div>
    </section>
  );
};