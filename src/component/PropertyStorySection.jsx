import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Home, Utensils, Sparkles } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

/* ---------------- ICON MAP ---------------- */
const iconMap = {
  Home,
  Utensils,
  Sparkles,
};

/* ---------------- DATA ---------------- */
const data = {
  sectionLabel: "Our Restaurants on Resort's",
  title: [
    "Experience Premium",
    "Dining Crafted to Give",
    "You Unforgettable Moments.",
  ],
  rightDescription:
    "A paradise for two, where morning light dances on the water and evenings are filled with the sweet silence.",
  cta: "Book Now",
  slides: [
    {
      title: "Modern living upgrades",
      description:
        "Discover contemporary design with state-of-the-art amenities that redefine comfort and elegance in every corner.",
      icon: "Home",
      leftImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      rightImage:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    },
    {
      title: "Fine dining experience",
      description:
        "Savor world-class cuisine prepared by renowned chefs, offering an exquisite culinary journey you won't forget.",
      icon: "Utensils",
      leftImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      rightImage:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    },
    {
      title: "Luxury ambience",
      description:
        "Immerse yourself in sophisticated surroundings with premium service and breathtaking views at every moment.",
      icon: "Sparkles",
      leftImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
      rightImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ],
};

/* ---------------- SCROLL SCALE HOOK ---------------- */
const useScrollScale = () => {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = 1 - rect.top / windowHeight;
      const clamped = Math.min(Math.max(progress, 0), 1);

      setScale(1 + clamped * 0.12); // max scale 1.12
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, scale };
};

/* ---------------- COMPONENT ---------------- */
const PropertyStorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leftImageSwiperRef = useRef(null);
  const rightImageSwiperRef = useRef(null);
  const cardSwiperRef = useRef(null);

  const { ref: leftRef, scale: leftScale } = useScrollScale();
  const { ref: rightRef, scale: rightScale } = useScrollScale();

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-500 mb-4">{data.sectionLabel}</p>

          <h2 className="text-4xl font-bold leading-snug max-w-lg">
            {data.title.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>

          {/* LEFT IMAGE */}
          <div
            ref={leftRef}
            className="mt-10 relative overflow-hidden rounded-3xl"
          >
            <Swiper
              modules={[EffectFade]}
              effect="fade"
              allowTouchMove={false}
              onSwiper={(swiper) => (leftImageSwiperRef.current = swiper)}
            >
              {data.slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={slide.leftImage}
                    alt=""
                    style={{ transform: `scale(${leftScale})` }}
                    className="w-full h-[620px] object-cover transition-transform duration-500 ease-out"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* FLOATING CARD */}
            <div className="absolute bottom-5 left-6 right-6">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onSwiper={(swiper) => (cardSwiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  const index = swiper.realIndex;
                  setActiveIndex(index);
                  leftImageSwiperRef.current?.slideToLoop(index);
                  rightImageSwiperRef.current?.slideToLoop(index);
                }}
              >
                {data.slides.map((slide, i) => {
                  const Icon = iconMap[slide.icon];
                  return (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-gray-600" />
                          </div>

                          <div className="flex gap-2">
                            {data.slides.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() =>
                                  cardSwiperRef.current?.slideToLoop(idx)
                                }
                                className={`w-2 h-2 rounded-full transition ${
                                  idx === activeIndex
                                    ? "bg-gray-700"
                                    : "bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <h4 className="font-semibold text-lg mb-2">
                          {slide.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {slide.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <div ref={rightRef} className="overflow-hidden rounded-3xl">
            <Swiper
              modules={[EffectFade]}
              effect="fade"
              allowTouchMove={false}
              onSwiper={(swiper) => (rightImageSwiperRef.current = swiper)}
            >
              {data.slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={slide.rightImage}
                    alt=""
                    style={{ transform: `scale(${rightScale})` }}
                    className="w-full h-[620px] object-cover transition-transform duration-500 ease-out"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="mt-6 text-sm text-gray-500 max-w-lg">
            {data.rightDescription}
          </p>

          <button className="mt-6 inline-flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-900 transition">
            {data.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyStorySection;
