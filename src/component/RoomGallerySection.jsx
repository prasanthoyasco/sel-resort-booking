import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
];

export default function RoomGallerySection() {
  return (
    <section
      className="w-full py-10 lg:py-20 bg-white overflow-hidden"
      data-aos="fade-up"
    >
      <div
        className="relative w-full max-w-[1600px] h-auto mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        {/* Navigation Buttons */}
        <button
          data-aos="fade-right"
          data-aos-delay="300"
          className="swiper-prev-btn absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 hover:bg-white transition-all text-gray-700"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          data-aos="fade-left"
          data-aos-delay="300"
          className="swiper-next-btn absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 hover:bg-white transition-all text-gray-700"
        >
          <ChevronRight size={24} />
        </button>

        {/* Swiper */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-prev-btn",
              nextEl: ".swiper-next-btn",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            centeredSlides
            loop
            loopedSlides={2}
            loopPreventsSliding={false}
            slidesPerView={1.2}
            spaceBetween={5}
            breakpoints={{
              768: { slidesPerView: 1.5, spaceBetween: 30 },
              1024: { slidesPerView: 1.8, spaceBetween: 40 },
              1440: { slidesPerView: 2, spaceBetween: 60 },
            }}
            className="room-swiper overflow-visible!"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="py-4">
                {({ isActive }) => (
                  <div
                    className={`relative transition-all duration-700 max-h-[55vh] ease-in-out overflow-hidden rounded-2xl ${
                      isActive
                        ? "opacity-100 scale-100 shadow-xl"
                        : "opacity-30 scale-90 blur-[1px]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Room ${i}`}
                      className="h-[350px] md:h-[550px] w-full object-cover rounded-2xl"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Action Button */}
        <div
          className="mt-10 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link
            to="#"
            className="border-2 border-slate-900 text-slate-900 font-bold rounded-full px-12 py-4 text-xs tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all duration-300 transform active:scale-95"
          >
            FULLSCREEN GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
}
