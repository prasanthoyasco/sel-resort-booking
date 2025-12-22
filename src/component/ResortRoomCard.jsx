import { Accessibility, ArrowUpRight, Bath, CarFront, HouseWifi } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResortRoomCard({
  image,
  title,
  description,
  size,
  tags = [],
}) {
  const navigation = useNavigate();
  return (
    /* Changed: flex-col on mobile, flex-row on desktop (lg) */
    <div className="w-full bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-6 lg:gap-8">
      
      {/* Image Container */}
      {/* Changed: Full width on mobile, 55% on desktop. Set a fixed height for mobile aspect ratio */}
      <div className="relative w-full lg:w-[55%] h-64 sm:h-80 lg:h-auto rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs text-white bg-black/40 backdrop-blur rounded-full border border-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      {/* Changed: Full width on mobile, 45% on desktop */}
      <div className="flex flex-col justify-between w-full lg:w-[45%] py-2 lg:py-4">
        
        {/* Amenities Icons */}
        {/* Changed: grid/wrap on mobile so they don't overflow, flex-nowrap on desktop */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 sm:gap-4 mb-6">
          <StatCircle value={size} label="space" />
          <StatCircle icon={<Bath size={20}/>} label="Bath Tub" />
          <StatCircle icon={<Accessibility size={20}/>} label="Access" />
          <StatCircle icon={<HouseWifi size={20}/>} label="Be Online" />
          <StatCircle icon={<CarFront size={20}/>} label="Parking" />
        </div>

        {/* Title & Description */}
        <div className="mb-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 mt-4 lg:mt-0" onClick={()=>{navigation(`/room/details`)}}>
          <span className="text-sm font-medium">Discover More</span>
          <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Small helper component to keep the code clean
function StatCircle({ value, icon, label }) {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-300 p-1 flex flex-col items-center justify-center shrink-0">
      <div className="font-semibold text-base sm:text-lg text-indigo-400">
        {value || icon}
      </div>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 text-center whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}