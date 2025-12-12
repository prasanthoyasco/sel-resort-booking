export default function StayGallery() {
  const img1 =
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/689a6a04259adc7fa4a2c005_cta_1.avif";
  const img2 =
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/689a6a049d45734c9c038bc9_cta_2.avif";
  const img3 =
    "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/689a6a0490bea4f3bd36e849_cta_3.avif";

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 text-white">
      {/* Inject component-specific CSS so this file is self-contained */}
      <style>{`
        /* Image floating & entrance */
        @keyframes imgEntrance1 {
          0% { transform: translate3d(-120vw, -30vw, 0) rotate(20deg) scale(1.02); opacity: 0 }
          60% { transform: translate3d(-92vw, -11vw, 0) rotate(18deg) scale(1.01); opacity: 1 }
          100% { transform: translate3d(-90vw, -10vw, 0) rotate(20deg) scale(1); }
        }
        @keyframes imgEntrance2 {
          0% { transform: translate3d(-120vw, 30vw, 0) rotate(-24deg) scale(1.02); opacity:0 }
          60% { transform: translate3d(-88vw, 7vw, 0) rotate(-15deg) scale(1.01); opacity:1 }
          100% { transform: translate3d(-85.018vw, 5.0011vw, 0) rotate(-14.003deg) scale(1); }
        }
        @keyframes imgEntrance3 {
          0% { transform: translate3d(-120vw, -10vw, 0) rotate(14deg) scale(1.02); opacity:0 }
          60% { transform: translate3d(-92vw, -3vw, 0) rotate(11deg) scale(1.01); opacity:1 }
          100% { transform: translate3d(-88.4804vw, 0vw, 0) rotate(10.4095deg) scale(1); }
        }

        /* gentle float loop */
        @keyframes floatA { 0% { transform: translateY(0px) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0px) } }
        @keyframes floatB { 0% { transform: translateY(0px) } 50% { transform: translateY(8px) } 100% { transform: translateY(0px) } }

        /* marquee strips */
        @keyframes panLeft {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-50%) }
        }
        @keyframes panRight {
          0% { transform: translateX(0%) }
          100% { transform: translateX(50%) }
        }

        /* helper to hide scrollbar on strip container */
        .strip-viewport { -ms-overflow-style: none; scrollbar-width: none; }
        .strip-viewport::-webkit-scrollbar { display: none; }

        /* small UI niceties for pixel-perfection */
        .cta-button-dup { position: relative; display:inline-block; overflow:hidden; }
        .cta-button-dup .front { transform: translateY(0%); transition: transform .28s ease; }
        .cta-button-dup .back { position:absolute; inset:0; top:0; left:0; transform: translateY(100%); pointer-events:none; }
        .cta-button-dup:hover .front { transform: translateY(-100%); }
        .cta-button-dup:hover .back { transform: translateY(0%); }

        /* responsive tweaks for images to keep pixel alignment at different breakpoints */
        @media (max-width: 1024px) {
          .image-cta { will-change: transform; opacity: .95 }
        }
        @media (max-width: 640px) {
          .image-cta { display: none } /* hide large angled images on very small screens (match video) */
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="relative flex items-center gap-8">
          {/* Image block (absolute positioned canvas on the left) */}
          <div className="relative w-1/2 hidden lg:block">
            <div className="relative w-full h-[420px] pointer-events-none">
              {/* Images positioned similarly to the HTML transforms you gave */}
              <img
                src={img1}
                alt=""
                loading="lazy"
                className="image-cta absolute rounded-lg shadow-xl"
                style={{
                  width: "520px",
                  top: "0",
                  left: "0",
                  transform: "translate3d(-90vw, -10vw, 0px) rotate(20deg)",
                  animation: "imgEntrance1 1.05s cubic-bezier(.2,.9,.2,1) forwards, floatA 6s ease-in-out 1.2s infinite",
                  transformOrigin: "center",
                }}
              />
              <img
                src={img2}
                alt=""
                loading="lazy"
                className="image-cta absolute rounded-lg shadow-2xl"
                style={{
                  width: "460px",
                  top: "40px",
                  left: "20px",
                  transform: "translate3d(-85.018vw, 5.0011vw, 0px) rotate(-14.003deg)",
                  animation: "imgEntrance2 1.05s cubic-bezier(.2,.9,.2,1) 0.06s forwards, floatB 5.6s ease-in-out 1.35s infinite",
                  transformOrigin: "center",
                }}
              />
              <img
                src={img3}
                alt=""
                loading="lazy"
                className="image-cta absolute rounded-lg shadow-lg"
                style={{
                  width: "480px",
                  top: "12px",
                  left: "40px",
                  transform: "translate3d(-88.4804vw, 0vw, 0px) rotate(10.4095deg)",
                  animation: "imgEntrance3 1.05s cubic-bezier(.2,.9,.2,1) 0.12s forwards, floatA 7s ease-in-out 1.5s infinite",
                  transformOrigin: "center",
                }}
              />
            </div>
          </div>

          {/* Content (center/right) */}
          <div className="w-full lg:w-1/2">
            <p className="mb-6 text-3xl md:text-4xl font-extrabold leading-tight">
              Diverse in <span className="text-indigo-300">craft</span>, steadfast in{" "}
              <span className="text-indigo-300">creativity</span>. <br />
              Let’s bring the unexpected to life.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="/contact/contact-1"
                className="button large relative inline-block"
                aria-label="Get Started"
              >
                <div className="link-block cta-button-dup bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg inline-flex items-center">
                  <div className="front button-text">Get Started</div>
                  <div className="back button-text absolute">Get Started</div>
                </div>
              </a>

              <a className="text-sm inline-block underline-offset-2 hover:underline" href="/contact">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip marquee (absolute) */}
        <div className="strip-absolute mt-12 relative">
          <div className="absolute inset-x-0 -bottom-10 pointer-events-none">
            <div className="strip-viewport relative overflow-hidden">
              {/* stripe container */}
              <div className="strip-cta relative w-full">
                {/* left-to-right block (duplicated content repeated so animation loops seamlessly) */}
                <div
                  className="strip flex items-center gap-6 whitespace-nowrap"
                  style={{
                    display: "flex",
                    width: "200%",
                    animation: "panLeft 18s linear infinite",
                  }}
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={"l" + i} className="flex items-center gap-3 px-6">
                      <div className="text-sm font-semibold tracking-wide">Lat’s Create</div>
                      <div className="w-3 h-3 rounded-full bg-white/80"></div>
                    </div>
                  ))}
                </div>

                {/* reversed strip - moves opposite direction */}
                <div
                  className="strip reverse mt-2"
                  style={{
                    display: "flex",
                    width: "200%",
                    animation: "panRight 20s linear infinite",
                    gap: "0",
                    marginTop: "6px",
                  }}
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={"r" + i} className="flex items-center gap-3 px-6">
                      <div className="text-sm font-semibold tracking-wide">Lat’s Create</div>
                      <div className="w-3 h-3 rounded-full bg-white/80"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* gradient overlay atop the strip */}
              <div
                className="gradient-strip absolute inset-x-0 top-0 h-6 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(15,23,42,0.0) 0%, rgba(15,23,42,0.9) 10%, rgba(15,23,42,0.9) 90%, rgba(15,23,42,0) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
