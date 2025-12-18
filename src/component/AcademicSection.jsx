import React, { useState } from "react";

export default function AcademicSection() {
  const [activeCard, setActiveCard] = useState(0); // first card active by default

  const cards = [
    {
      title: "Nature-Inspired Living",
      desc:
        "Wake up to greenery, fresh air, and scenic landscapes that refresh your mind and soul.",
      icon:
        "https://cdn-icons-png.freepik.com/256/10632/10632284.png",
    },
    {
      title: "Elegant Luxury Rooms",
      desc:
        "Thoughtfully designed rooms with premium comfort and modern amenities.",
      icon:
        "https://cdn-icons-png.freepik.com/256/1966/1966649.png",
    },
    {
      title: "Wellness & Relaxation",
      desc:
        "Rejuvenate with spa therapies, calm surroundings, and mindful experiences.",
      icon:
        "https://cdn-icons-png.freepik.com/256/4897/4897169.png",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-4 space-y-22">
            <div className="py-6 flex flex-col justify-evenly my-auto h-[38vh]">
              <p className="text-sm text-gray-500">
                Nature • Comfort • Experience
              </p>

              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                Why Guests Choose Sel Resort
              </h2>

              <p className="text-gray-600">
                A peaceful retreat surrounded by nature, designed for comfort,
                relaxation, and unforgettable moments.
              </p>
            </div>

            {/* CARD 0 */}
            <FeatureCard
              {...cards[0]}
              active={activeCard === 0}
              onHover={() => setActiveCard(0)}
              onLeave={() => setActiveCard(0)}
            />
          </div>

          {/* CENTER CARDS */}
          <div className="lg:col-span-4 grid gap-6">
            {cards.slice(1).map((card, index) => (
              <FeatureCard
                key={index}
                {...card}
                active={activeCard === index + 1}
                onHover={() => setActiveCard(index + 1)}
                onLeave={() => setActiveCard(0)}
              />
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-4 h-[100%]">
            <img
              src="https://cdn.prod.website-files.com/684c437bd1bedfba51264f73/68580aa6a7ec7380abf637da_man-pan-KTSYy-3XVSo-unsplash-p-2000.jpg"
              alt="Sel Resort"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function FeatureCard({ title, desc, icon, active, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`rounded-2xl px-6 py-14 transition-all duration-300 cursor-pointer shadow-lg h-[35vh]
        ${active ? "bg-[#121a28] text-white" : "bg-white text-gray-900"}
      `}
    >
      {/* <img src={icon} alt={title} className="w-12 h-12 mb-4" /> */}
      <h4 className="text-2xl font-semibold mb-2">{title}</h4>
      <p className={`${active ? "text-gray-300" : "text-gray-600"}`}>
        {desc}
      </p>
    </div>
  );
}
