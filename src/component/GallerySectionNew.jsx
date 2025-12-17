import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GallerySectionNew = () => {
  const mainContainer = useRef(null);
  const zoomImage = useRef(null);
  const textContent = useRef(null);
  const gridWrapper = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(
        gridWrapper.current,
        {
          scale: 1.1, // Slight overall zoom for depth
          duration: 2,
        },
        0
      )
        .to(
          ".peripheral-img",
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
          },
          0
        )
        .to(
          zoomImage.current,
          {
            // Essential: expand to fill the entire viewport
            width: "100vw",
            height: "100vh",
            maxWidth: "none",
            maxHeight: "none",
            duration: 2,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          textContent.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=1"
        );
    }, mainContainer);
    return () => ctx.revert();
  }, []);

  return (
    <div className="">
      <section
        ref={mainContainer}
        className="relative h-screen w-full overflow-hidden bg-[#758dc2] z-10 flex items-center justify-center"
      >
        {/* THE GRID SYSTEM */}
        <div
          ref={gridWrapper}
          className="relative w-full max-w-[1440px] px-10 flex flex-col gap-6"
        >
          {/* Top Row: Asymmetrical pair */}
          <div className="flex justify-center gap-6 items-end h-[27vh]">
            <img
              src="https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d386823096e_outer-image.webp"
              className="peripheral-img w-[40%] h-full object-cover rounded-md"
              alt="Architecture"
            />
            <img
              src="https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d3868230962_Interior.webp"
              className="peripheral-img w-[30%] h-[90%] object-cover rounded-md"
              alt="Interior"
            />
          </div>

          {/* Middle Row: Side images + The Main Zooming Image */}
          <div className="flex justify-center gap-6 items-center h-[30vh]">
            <img
              src="https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d386823095f_dining-room.webp"
              className="peripheral-img w-[15%] h-[80%] object-cover rounded-md"
              alt="Dining"
            />

            {/* CENTER ZOOM IMAGE */}
            <div className="relative z-20 shrink-0 overflow-hidden">
              <img
                ref={zoomImage}
                src="https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d386823097e_Drawn%20House.webp"
                className="w-[45vw] h-[30vh] object-cover rounded-2xl shadow-2xl"
                alt="Main Building"
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none rounded-2xl" />
            </div>

            <img
              src="https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d386823095c_siting-room.webp"
              className="peripheral-img w-[15%] h-[80%] object-cover rounded-md"
              alt="Sitting"
            />
          </div>

          {/* Bottom Row: Wide image */}
          <div className="flex justify-center h-[30vh]">
            <img
              src="https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d3868230967_Sitting.webp"
              className="peripheral-img w-[50%] h-full object-cover rounded-md"
              alt="Living"
            />
          </div>
        </div>

        {/* OVERLAY CONTENT (Hidden until Zoom is near completion) */}
        <div
          ref={textContent}
          className="absolute inset-0 z-30 flex flex-row items-center justify-between px-[8%] opacity-0 translate-y-10 pointer-events-none"
        >
          {/* 2. Text Content (Now on the Right) */}
          <div className="flex flex-col items-start max-w-2xl">
            <h1 className="text-white text-7xl font-bold mb-4 leading-tight">
              Building Dreams With Expert Precision
            </h1>
            <p className="text-white/80 max-w-xl text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sit urna mattis
              pellentesque nibh sit in pulvinar elementum id. Aliquet purus orci
              proin sed scelerisque odio.
            </p>
            <div className="flex items-center gap-10">
              <button className="text-white border-b border-white w-fit text-xl pb-1 pointer-events-auto hover:text-[#a68a68] hover:border-[#a68a68] transition-colors">
                Discover More ↗
              </button>
            </div>
          </div>

          {/* 1. Windows Mobile Style Grid (Now on the Left) */}
          <div className="w-72 h-72 grid grid-cols-2 grid-rows-2 gap-3 pointer-events-auto">
            {/* Large Tile (Top Left) */}
            <div className="col-span-1 row-span-1 bg-white/10 overflow-hidden rounded-sm relative group border border-white/10">
              <div className="tile-content w-full h-full">
                <LiveTile
                images={[
                  "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d3868230962_Interior.webp",
                  "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d386823095c_siting-room.webp",
                ]}
              />
              </div>
            </div>

            {/* Live Tile (Top Right) - Animated Component */}
            <div className="col-span-1 row-span-1 bg-[#a68a68] overflow-hidden rounded-sm relative shadow-lg">
              <LiveTile
                images={[
                  "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d386823095f_dining-room.webp",
                  "https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67adac8ef53d8d386823095c_siting-room.webp",
                ]}
              />
            </div>

            {/* Wide Tile (Bottom) */}
            <div className="col-span-2 row-span-1 bg-black/40 overflow-hidden rounded-sm relative border border-white/10">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover opacity-80"
              >
                <source
                  src="https://cdn.prod.website-files.com/6667d7bcc80d3c3ef173af9f/67bdaf1a42755b16fbdd0b47_7578544-uhd_3840_2160_30fps-transcode.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute bottom-2 left-2 text-[10px] uppercase tracking-widest text-white font-bold bg-black/20 px-1">
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION (Covers the previous one) */}
      <section className="relative z-20 bg-transparent min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-bold text-transparent mb-6">
          Innovative Architecture
        </h2>
        <p className="text-transparent max-w-2xl">
          Continuing the journey through expert precision and design excellence.
        </p>
      </section>
    </div>
  );
};

export default GallerySectionNew;

const LiveTile = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  const tileRef = useRef(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % images.length;

      gsap.to(tileRef.current, {
        rotationX: -90,
        duration: 0.4,
        onComplete: () => {
          setIndex(nextIndex);
          gsap.fromTo(
            tileRef.current,
            { rotationX: 90 },
            { rotationX: 0, duration: 0.4 }
          );
        },
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [index, images.length]);

  return (
    <div ref={tileRef} className="w-full h-full bg-[#8c7456] preserve-3d">
      <img
        src={images[index]}
        className="w-full h-full object-cover"
        alt="Live Update"
      />
    </div>
  );
};
