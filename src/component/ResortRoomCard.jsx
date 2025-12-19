import { Accessibility, ArrowUpRight, Bath, CarFront, HouseWifi } from "lucide-react";

export default function ResortRoomCard({
  image,
  title,
  description,
  size,
  tags = [],
}) {
  return (
    <div className="w-full bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex gap-8">
      
      {/* Image */}
      <div className="relative w-[55%] rounded-2xl overflow-hidden">
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
      <div className="flex flex-col justify-between w-[45%] py-4">
        
        {/* Stat */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full border border-gray-300 p-1 flex flex-col items-center justify-center">
            <p className="font-semibold text-lg text-indigo-400">{size}</p>
            <p className="text-xs text-gray-500">space</p>
          </div>
          <div className="w-20 h-20 rounded-full border border-gray-300 p-1 flex flex-col items-center justify-center">
            <p className="font-semibold text-lg text-indigo-400"><Bath/></p>
            <p className="text-xs text-gray-500 mt-1">Bath Tub</p>
          </div>
          <div className="w-20 h-20 rounded-full border border-gray-300 p-1 flex flex-col items-center justify-center">
            <p className="font-semibold text-lg text-indigo-400"><Accessibility/></p>
            <p className="text-xs text-gray-500 mt-1">Access</p>
          </div>
          <div className="w-20 h-20 rounded-full border border-gray-300 p-1 flex flex-col items-center justify-center">
            <p className="font-semibold text-lg text-indigo-400"><HouseWifi/></p>
            <p className="text-xs text-gray-500 mt-1">Be Online</p>
          </div>
          <div className="w-20 h-20 rounded-full border border-gray-300 p-1 flex flex-col items-center justify-center">
            <p className="font-semibold text-lg text-indigo-400"><CarFront/></p>
            <p className="text-xs text-gray-500 mt-1">Parking</p>
          </div>
        </div>

        {/* Title */}
       <div>
         <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
          {description}
        </p>
       </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Discover More</span>
          <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
