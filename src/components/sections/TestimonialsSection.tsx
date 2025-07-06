import React from "react";
import "../../testimonials.css";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "In college, I faced many distractions that could have led me astray. In my second year, joining the GDG Noida community was a turning point. Their events and sessions refocused me on my software development goals. Thanks to GDG Noida, I found the direction and inspiration to follow my passion. I'm truly grateful for their support and the positive impact on my career.",
      name: "Shekhar Patel",
      title: "GSoC'24, The Palisadoes Foundation",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    },
    {
      quote:
        "GDG Noida introduced me to open-source tech communities. Their guidance helped me advance my career, and I'm grateful for the opportunities GDG Noida provided. I'm now excited to share my own experiences as a speaker!",
      name: "Kaushik Karan Singh",
      title: "Android Developer, Mind Geeks",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    },
    {
      quote:
        "GDG Noida is my happy place. When I joined this community 2 years ago, I had no experience in proper communication. The team, especially the organizers, were so helpful and always encouraged me. Thanks to GDG Noida, I've improved my analytical thinking and task management skills and landed great opportunities.",
      name: "Abhinav Jha",
      title: "Product Designer Intern, Nickelfox",
      avatar:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    },
    {
      quote:
        "I had the privilege of meeting Ansh Mehra at Devfest Noida. I learned the fundamentals of design from his YouTube videos. As a distinguished speaker at the event, he left an indelible mark on me. Meeting him at Devfest opened the door to a collaborative journey on a series of exciting projects.",
      name: "Garima Pandey",
      title: "UX Designer, Eden Care Medical",
      avatar:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    },
    {
      quote:
        "The workshops and hackathons organized by GDG Noida have been instrumental in my growth as a developer. The community's support and the quality of speakers they bring is exceptional. It's more than just a tech community - it's a family.",
      name: "Rohit Sharma",
      title: "Full Stack Developer, TCS",
      avatar:
        "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    },
    {
      quote:
        "Being part of GDG Noida has opened doors I never imagined. The networking opportunities, mentorship, and collaborative projects have accelerated my career in ways I couldn't have achieved alone. Highly recommend joining this amazing community!",
      name: "Priya Gupta",
      title: "Data Scientist, Microsoft",
      avatar:
        "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
    },
  ];

  const createTestimonialCard = (testimonial: any, index: number) => {
    return (
      <div
        key={`${testimonial.name}-${index}`}
        className="bg-white p-6 rounded-2xl shadow-lg mb-6 flex-shrink-0"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-gray-900">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-600">{testimonial.title}</div>
          </div>
        </div>
        <div className="text-gray-700 leading-relaxed">
          "{testimonial.quote}"
        </div>
      </div>
    );
  };

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const column1Data = shuffleArray(testimonials);
  const column2Data = shuffleArray(testimonials);
  const column3Data = shuffleArray(testimonials);

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-[#ea4335] text-6xl md:text-7xl lg:text-8xl mb-4 relative">
            Testimonials
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gray-900 mt-4"></div>
          </h2>
          <p className="font-sans text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Hear from our amazing community members about their journey with GDG
            Noida
          </p>
        </div>

        <div className="flex gap-8 max-w-6xl mx-auto h-[500px] px-6">
          {/* Column 1 */}
          <div className="flex-1 h-full overflow-hidden testimonial-column">
            <div className="flex flex-col animate-scroll-up-23 hover:animate-pause testimonial-mask">
              {[...column1Data, ...column1Data].map((testimonial, index) =>
                createTestimonialCard(testimonial, index)
              )}
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 h-full overflow-hidden testimonial-column hidden md:block">
            <div className="flex flex-col animate-scroll-down-50 hover:animate-pause testimonial-mask">
              {[...column2Data, ...column2Data].map((testimonial, index) =>
                createTestimonialCard(testimonial, index)
              )}
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex-1 h-full overflow-hidden testimonial-column hidden lg:block">
            <div className="flex flex-col animate-scroll-up-30 hover:animate-pause testimonial-mask">
              {[...column3Data, ...column3Data].map((testimonial, index) =>
                createTestimonialCard(testimonial, index)
              )}
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#4285f4]/10 to-[#ea4335]/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
};
