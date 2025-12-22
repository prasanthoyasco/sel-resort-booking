import { useState } from "react";
import { Building2, Target, Eye, HeartHandshake, Phone } from "lucide-react";

/* ---------- JSON DATA ---------- */
const tabsData = [
  {
    id: "mission",
    label: "Our Mission",
    icon: Target,
    content:
      "Our mission is delivering premium comfort, warm service, and unforgettable experiences for every guest choosing our resort.",
  },
  {
    id: "vision",
    label: "Our Vision",
    icon: Eye,
    content:
      "Our vision is to become a globally admired luxury resort brand known for sustainability, elegance, and authentic hospitality.",
  },
  {
    id: "value",
    label: "Our Value",
    icon: HeartHandshake,
    content:
      "We value integrity, guest satisfaction, environmental responsibility, and personalized service in everything we do.",
  },
];

export default function AboutWithVisionMission() {
  const [activeTab, setActiveTab] = useState(tabsData[0]); // default Mission

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT – IMAGE COLLAGE */}
        <div className="relative">
          <div className="rounded-3xl relative overflow-hidden w-[360px] h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Resort staff"
              className="w-full h-full object-cover"
            />
          </div>
          

          <div className="absolute top-10 right-10 bg-white shadow-lg rounded-2xl px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ffb47d] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium text-gray-700 leading-snug">
              We have served <br /> customers for 15+ years.
            </p>
          </div>

          <div className="absolute bottom-[-60px] right-20 rounded-3xl overflow-hidden w-[260px] h-[300px] border-8 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              alt="Luxury lobby"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <div className="flex items-center gap-2 text-[#ffb47d] font-medium mb-4">
            <Building2 className="w-4 h-4" />
            <span>About Us</span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight mb-6">
            Your Dream luxury resort <br /> awaits your arrival.
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl">
            Indulge in peaceful surroundings, elegant rooms, and premium
            amenities tailored for ultimate relaxation.
          </p>

          {/* TABS */}
          <div className="bg-[#f6f7f5] rounded-2xl p-6 mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              {tabsData.map((tab) => (
                <Tab
                  key={tab.id}
                  icon={tab.icon}
                  label={tab.label}
                  active={activeTab.id === tab.id}
                  onClick={() => setActiveTab(tab)}
                />
              ))}
            </div>

            {/* DYNAMIC CONTENT */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-lg transition-all duration-300">
              {activeTab.content}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffb47d] flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">+91 91234 56789</p>
              <p className="text-sm text-gray-500">
                Contact us for executives via phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TAB COMPONENT ---------- */
function Tab({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all
        ${
          active
            ? "bg-[#ffb47d] text-white shadow"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}
