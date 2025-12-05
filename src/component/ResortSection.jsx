import React from "react";

const villas = {
  left: {
    img: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5e08/68513c47b3dcbe5b21c6c162_1.jpg",
    title: "Villa Sundara",
    desc: "A paradise for two, where morning light dances on the water and evenings are filled with the sweet silence.",
    features: ["4 bedrooms", "2 terrace", "sauna", "6 bedrooms", "3 bathrooms"],
    area: "218",
    areaDesc: "stylish space",
  },
  right: [
    {
      img: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5e08/68513cc3714afb19871074e3_2.jpg",
      title: "Villa Kaela",
      features: [
        "2 bedrooms",
        "mountain view",
        "sauna",
        "1 terrace",
        "lake view",
        "4 bedrooms",
      ],
    },
    {
      img: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5e08/68513ce889084115b2592b97_3.jpg",
      title: "Villa Solaya",
      features: [
        "3 bathrooms",
        "sauna",
        "2 terrace",
        "4 bedrooms",
        "mountain view",
      ],
    },
  ],
};

export default function ResortSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Life Along The Coast
            </h2>
            <p className="text-gray-600 text-lg">
              The villas were built with low-impact methods, following the
              land’s natural curves to blend seamlessly into the coastal
              landscape.
            </p>
          </div>

          <button className="group mt-6 md:mt-0 bg-black flex items-center gap-4 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition relative overflow-hidden">
            {/* LEFT ARROW — hidden initially, slides in on hover */}
            <img
              src="/icons/chevron-right.svg"
              alt="left"
              className="
      absolute invert-100 left-6 w-4 opacity-0 
      -translate-x-4 
      transition-all duration-300 
      group-hover:opacity-100 
      group-hover:translate-x-0
    "
            />

            {/* BUTTON TEXT */}
            <span className="relative z-10 
      transition-all duration-300 group-hover:translate-x-6 ">View All Available Villas</span>

            {/* RIGHT ARROW — visible initially, slides out on hover */}
            <img
              src="/icons/chevron-right.svg"
              alt="right"
              className=" invert-100
      relative w-4 
      transition-all duration-300 
      group-hover:translate-x-4 
      group-hover:opacity-0
    "
            />
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-4 lg:grid-cols-4 gap-10">
          {/* LEFT BIG CARD */}
          <div className="col-span-2 lg:col-span-2 bg-white/20 background-blur-md rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
            {/* IMAGE */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden relative">
              {/* IMAGE */}
              <img
                src={villas.left.img}
                className="w-full h-full object-cover"
                alt="villa"
              />

              {/* FEATURES TAGS ON TOP */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                {villas.left.features.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm text-black shadow"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* INFO */}
            <div className="flex flex-col justify-between flex-1">
              {/* Features */}
              <div className="flex gap-4 items-center mb-18">
                {/* Features */}
                <div className="p-2 border border-gray-300 rounded-full backdrop-blur-sm bg-white/60 shadow-sm flex items-center justify-center h-25 w-25">
                  <img
                    src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/6851263bb91fe7531b08f691_Frame.svg"
                    alt="Area Icon"
                    className="w-full"
                  />
                </div>

                {/* Area Text Box */}
                <div className="p-5 border flex-col border-gray-300 rounded-full text-center backdrop-blur-sm bg-white/60 shadow-sm flex items-center gap-1 h-25 w-25">
                  <div className="text-2xl font-semibold">
                    {villas.left.area}
                    <span className="text-sm ml-1">M2</span>
                  </div>
                  <div className="text-gray-500 text-xs">
                    {villas.left.areaDesc}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold mb-4">
                {villas.left.title}
              </h3>

              <p className="text-gray-600 mb-6">{villas.left.desc}</p>

              {/* Discover Button */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <span className="font-medium text-black">Discover More</span>
                <div className="w-10 h-10 overflow-hidden rounded-full bg-black/80 border flex items-center justify-center group-hover:bg-white  transition">
                  <img
                    src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                    className="w-4 absolute overflow-hidden group-hover:opacity-0  transition-all duration-300 transform group-hover:translate-y-10 group-hover:translate-x-10"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                    className="w-4 group-hover:invert  absolute -translate-y-10 -translate-x-10 transition-all duration-300 opacity-0 transform group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {villas.right.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl col-span-1  overflow-hidden shadow-lg relative"
            >
              <img
                src={card.img}
                className="w-full h-full object-cover"
                alt={card.title}
              />

              {/* Features */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {card.features.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Title + Arrow */}
              <div className="absolute bottom-6 left-6 text-white flex items-center gap-4">
                <h3 className="text-3xl font-semibold">{card.title}</h3>

                <div className="w-10 h-10 rounded-full bg-white/70 backdrop-blur flex items-center justify-center cursor-pointer hover:bg-white transition">
                  <img
                    src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68512e74aec665cf47b7a252_Vector.svg"
                    className="w-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
