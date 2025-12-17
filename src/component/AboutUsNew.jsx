import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  [
    "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67b46f6800eea974a307c4f8_Blog%2520Two%2520Thumbnail%2520(5)-p-500.webp",
    "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67b3348665e4641de9cf4a3f_service%2520item%2520(1)-p-500.webp",
  ],
  [
    "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67b46f6800eea974a307c4f8_Blog%2520Two%2520Thumbnail%2520(5)-p-500.webp",
    "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67b3348665e4641de9cf4a3f_service%2520item%2520(1)-p-500.webp",
  ],
  [
    "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67b46f6800eea974a307c4f8_Blog%2520Two%2520Thumbnail%2520(5)-p-500.webp",
    "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67b3348665e4641de9cf4a3f_service%2520item%2520(1)-p-500.webp",
  ],
  [
    "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67b46f6800eea974a307c4f8_Blog%2520Two%2520Thumbnail%2520(5)-p-500.webp",
    "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67b3348665e4641de9cf4a3f_service%2520item%2520(1)-p-500.webp",
  ],
];

const items = [
    {
      iconColor: "/icons/icon1-color.svg",
      iconWhite: "/icons/icon1-white.svg",
      label: "14 Spacious Oceanview Villas",
    },
    {
      iconColor: "/icons/icon2-color.svg",
      iconWhite: "/icons/icon2-white.svg",
      label: "3 Distinct Dining Venues",
    },
    {
      iconColor: "/icons/icon3-color.svg",
      iconWhite: "/icons/icon3-white.svg",
      label: "Nature Reserve",
    },
    {
      iconColor: "/icons/icon4-color.svg",
      iconWhite: "/icons/icon4-white.svg",
      label: "4 Cliffside Infinity Pools",
    },
  ];

const AboutUsNew = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;

      const getScrollAmount = () => {
        // We add a little extra buffer (100px) so the last staggered image fully clears
        return track.scrollWidth - container.offsetWidth + 100;
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinType: "transform",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white text-black overflow-hidden flex items-center"
    >
      <div className="flex w-full flex-col lg:flex-row items-center px-6 lg:px-10 gap-16">
        {/* LEFT — STAGGERED HORIZONTAL SCROLL */}
        <div
          ref={containerRef}
          className="relative w-full h-1/2 lg:h-auto lg:w-1/2 rounded-xl overflow-hidden mt-5 bg-gray-50 bg-[url('')] bg-no-repeat bg-cover bg-center" >
          <div
            ref={trackRef}
            className="flex gap-20 lg:gap-40 p-2 will-change-transform items-start"
          >
            {IMAGES.map((column, i) => (
              <div key={i} className="flex flex-col shrink-0 relative">
                {column.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt=""
                    className={`
                      w-64 h-80 lg:w-80 lg:h-[350px] object-cover rounded-md shadow-2xl transition-transform duration-500 hover:scale-105
                      ${
                        j === 1
                          ? "mt-[-150px] ml-20 lg:ml-32 z-10"
                          : "relative z-0"
                      }
                    `}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <img
        src="/icons/vector-light1.png"
        className="absolute -right-5 top-1/2 lg:top-50 -translate-y-1/2 w-[420px] opacity-10 pointer-events-none"
        alt="Vector"
      />

        {/* RIGHT — CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 z-20 backdrop-blur-sm lg:bg-transparent p-4 rounded-xl">
          <span className="text-xs tracking-widest uppercase bg-[#758dc2] text-white px-4 py-2 rounded-full w-max">
            About Us
          </span>
          <h1 className="text-4xl lg:text-7xl font-bold leading-[1.1] -tracking-normal">
            Sel Offers <br/> Quiet Beauty
          </h1>
          <p className="text-black/60 max-w-md text-lg leading-relaxed">
            Sel offers quiet beauty and deep stillness a sanctuary with soul, where refined design
            lives in harmony with the Mountains. 14 Spacious Oceanview Villas 3 Distinct Dining Venues
          </p>
          <div
          className="grid grid-cols-2 md:flex md:justify-center md:gap-10 gap-8 mt-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={250 + idx * 100}
            >
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-white border border-[#a3b7c2] shadow-sm transition-all duration-300 group-hover:bg-[#1C1C1C]">
                <img
                  src={item.iconColor}
                  alt=""
                  className="w-10 h-10 absolute transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={item.iconWhite}
                  alt=""
                  className="w-10 h-10 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              <p className="mt-4 text-gray-700 font-semibold max-w-sm text-sm md:text-sm capitalize text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsNew;
