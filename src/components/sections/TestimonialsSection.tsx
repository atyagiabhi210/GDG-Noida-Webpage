import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "In college, I faced many distractions that could have led me astray. In my second year, joining the GDG Noida community was a turning point. Their events and sessions refocused me on my software development goals. Thanks to GDG Noida, I found the direction and inspiration to follow my passion. I'm truly grateful for their support and the positive impact on my career.",
      name: "Shekhar Patel",
      title: "GSoC'24, The Palisadoes Foundation",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote:
        "GDG Noida introduced me to open-source tech communities. Their guidance helped me advance my career, and I'm grateful for the opportunities GDG Noida provided. I'm now excited to share my own experiences as a speaker!",
      name: "Kaushik Karan Singh",
      title: "Android Developer, Mind Geeks",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote:
        "GDG Noida is my happy place. When I joined this community 2 years ago, I had no experience in proper communication. The team, especially the organizers, were so helpful and always encouraged me. Thanks to GDG Noida, I've improved my analytical thinking and task management skills and landed great opportunities.",
      name: "Abhinav Jha",
      title: "Product Designer Intern, Nickelfox",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote:
        "I had the privilege of meeting Ansh Mehra at Devfest Noida. I learned the fundamentals of design from his YouTube videos. As a distinguished speaker at the event, he left an indelible mark on me. Meeting him at Devfest opened the door to a collaborative journey on a series of exciting projects.",
      name: "Garima Pandey",
      title: "UX Designer, Eden Care Medical",
      avatar: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote:
        "The workshops and hackathons organized by GDG Noida have been instrumental in my growth as a developer. The community's support and the quality of speakers they bring is exceptional. It's more than just a tech community - it's a family.",
      name: "Rohit Sharma",
      title: "Full Stack Developer, TCS",
      avatar: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      quote:
        "Being part of GDG Noida has opened doors I never imagined. The networking opportunities, mentorship, and collaborative projects have accelerated my career in ways I couldn't have achieved alone. Highly recommend joining this amazing community!",
      name: "Priya Gupta",
      title: "Data Scientist, Microsoft",
      avatar: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
  ];

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-[#ea4335] text-6xl md:text-7xl lg:text-8xl mb-4">
            Testimonials
          </h2>
          <p className="font-sans text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Hear from our amazing community members about their journey with GDG Noida
          </p>
        </div>

        <div className="relative">
          {/* First row - moving left */}
          <InfiniteMovingCards
            items={testimonials.slice(0, 3)}
            direction="right"
            speed="slow"
            className="mb-8"
          />
          
          {/* Second row - moving right */}
          <InfiniteMovingCards
            items={testimonials.slice(3)}
            direction="left"
            speed="slow"
          />
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#4285f4]/10 to-[#ea4335]/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};