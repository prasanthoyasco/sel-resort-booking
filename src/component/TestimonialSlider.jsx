import { useState, useEffect } from "react";
const avatars = [
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/men/18.jpg",
  "https://randomuser.me/api/portraits/men/29.jpg",
];
const testimonials = [
  {
    id: 1,
    name: "Raj Kumar",
    batch: "2024",
    text: "Our stay at this resort was absolutely magical. The staff went above and beyond to make our experience unforgettable. Highly recommend for a perfect getaway!",
  },
  {
    id: 2,
    name: "Marimuthu K",
    batch: "2023",
    text: "Exceptional service, stunning views, and world-class amenities. This resort exceeded all our expectations. We can't wait to return for another memorable vacation.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[index];

  return (
    <section className="w-full min-h-full py-10 flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto text-center px-6 ">
        {/* Top label */}
        <p className="text-md tracking-wide text-[#426bc5] mb-4">
          Testimonials
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
          Success stories told by our happy Patrons
        </h2>

        {/* Avatars */}
        <div className="relative mb-10 overflow-hidden">
          <div className="flex justify-center items-center gap-3">
            {avatars.map((img, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 bg-white"
              >
                <img
                  src={img}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(218deg,rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 1) 90%)",
            }}
          />
        </div>

        {/* Quote icon */}
        <div className="flex justify-center">
          <span className="text-[#426bc5] text-9xl leading-0 mt-16">“</span>
        </div>

        {/* Testimonial text */}
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
          {active.text}
        </p>

        {/* Author */}
        <div className="text-center">
          <p className="font-semibold text-gray-900">{active.name}</p>
          <p className="text-sm text-gray-500">{active.batch}</p>
        </div>
      </div>
    </section>
  );
}
