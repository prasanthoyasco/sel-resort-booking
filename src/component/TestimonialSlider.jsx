import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Nair",
    batch: "Bangalore",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Our stay at SEL Resort was truly unforgettable. The serene surroundings, elegant rooms, and warm hospitality made us feel relaxed from the moment we arrived. It was the perfect escape from city life.",
  },
  {
    id: 2,
    name: "Meenakshi Rao",
    batch: "Chennai",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "SEL Resort offers a beautiful blend of comfort and nature. From the peaceful ambience to the attentive staff and well-maintained amenities, every detail was thoughtfully taken care of.",
  },
  {
    id: 3,
    name: "Gobal Venki",
    batch: "Andhra",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "The experience at SEL Resort exceeded all our expectations. The impeccable service, luxurious accommodations, and serene natural setting created memories we'll cherish forever.",
  },
  {
    id: 4,
    name: "Marcus Thorne",
    batch: "London",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "The architectural brilliance combined with the natural landscape is breathtaking. SEL Resort perfectly balances modern comfort with a deep connection to nature.",
  },
  {
    id: 5,
    name: "Sasha Grey",
    batch: "Mumbai",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "Exceptional service and world-class amenities. Every moment at SEL Resort reflects their commitment to excellence and creating unforgettable experiences for guests.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(2); // Start with middle one active

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[index];
  const VISIBLE_RANGE = [-2, -1, 0, 1, 2];
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Top label */}
        <p className="text-sm font-medium tracking-widest text-gray-500 mb-2 uppercase">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Success stories told by our happy students
        </h2>

        {/* Avatars Carousel */}
        <div className="relative mb-10 h-28 flex items-center justify-center overflow-hidden">
          {/* Fade edges */}
          <div
            className="absolute inset-0 z-10 pointer-events-none 
    bg-linear-to-r from-white via-transparent to-white"
          />

          <div className="flex items-center -gap-1">
            {VISIBLE_RANGE.map((offset) => {
              const i =
                (index + offset + testimonials.length) % testimonials.length;
              const item = testimonials[i];
              const isActive = offset === 0;
              const isNeighbor = Math.abs(offset) === 1;

              return (
                <div
                  key={`${item.id}-${offset}`}
                  onClick={() => setIndex(i)}
                  className={`cursor-pointer transition-all duration-700 ease-in-out
            ${isActive ? "w-20 h-20 scale-110 opacity-100 z-20" : "w-16 h-16"}
            ${isNeighbor ? "opacity-60 scale-105" : ""}
            ${Math.abs(offset) === 2 ? "opacity-30 scale-90" : ""}
          `}
                >
                  <div
                    className={`w-full h-full rounded-full overflow-hidden border-2 
              ${isActive ? "border-[#ffb47d]" : "border-transparent"}`}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote icon - Switched to SVG for precise look */}
        <div className="flex justify-center">
          <span className="text-[#426bc5] text-9xl leading-0 mt-16">“</span>
        </div>

        {/* Testimonial text */}
        <div className="min-h-[120px]">
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 text-lg italic transition-all duration-500">
            {active.text}
          </p>
        </div>

        {/* Author */}
        <div className="text-center transition-all duration-500">
          <p className="text-xl font-bold text-gray-900 mb-1">{active.name}</p>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            {active.batch}
          </p>
        </div>
      </div>
    </section>
  );
}
