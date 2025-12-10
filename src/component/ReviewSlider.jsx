import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "One of the best weekend getaways! The resort ambience is peaceful, the rooms are spotless, and the food at the in-house restaurant is absolutely delicious.",
    name: "Karthik, Coimbatore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
  },
  {
    text: "Resort oda environment romba calm-ah iruku. Staff polite-ah treat pannanga, restaurant-la served pannina food super fresh. Couples-ku andha vibe romba suit aagum.",
    name: "Divya, Pollachi",
    logo: "https://user-images.githubusercontent.com/100310118/206441511-01d6b96f-56c9-444f-ae0d-2a6b8032b8aa.png",
  },
  {
    text: "We stayed here during our holiday trip and loved every minute of it. Pool area was clean, rooms were spacious, and the breakfast buffet had so many varieties.",
    name: "Rahul, Chennai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Booking.com_Icon_2022.svg/1200px-Booking.com_Icon_2022.svg.png",
  },
  {
    text: "Namma family weekend ku vandhom. Kids play area super maintain panna irukanga. Evening-la served pannina barbeque semma tasty!",
    name: "Priya, Erode",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KtO6UO_scXnTXfXk99apcH4k6gnFPvTkwg&s",
  },
  {
    text: "Absolutely loved the hospitality! The restaurant service was quick, the staff were friendly, and the food tasted authentic. Perfect choice for both stay and dining.",
    name: "Vignesh, Tiruppur",
    logo: "https://static.tacdn.com/assets/s/6b5096f1.ico",
  },
  {
    text: "The villa and ambience exceeded our expectations. Highly recommended for families looking for a peaceful stay.",
    name: "Suresh, Madurai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
  },
  {
    text: "Clean rooms, superb hospitality, and amazing breakfast! Definitely coming again.",
    name: "Lavanya, Salem",
    logo: "https://user-images.githubusercontent.com/100310118/206441511-01d6b96f-56c9-444f-ae0d-2a6b8032b8aa.png",
  },
  {
    text: "Very calm surroundings. Perfect for couples. Staff were so helpful and polite!",
    name: "Harish, Bangalore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Booking.com_Icon_2022.svg/1200px-Booking.com_Icon_2022.svg.png",
  },
  {
    text: "Value for money stay! The pool and garden area were so relaxing. Service was excellent!",
    name: "Deepika, Trichy",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KtO6UO_scXnTXfXk99apcH4k6gnFPvTkwg&s",
  },
  {
    text: "Loved the food and the peaceful atmosphere. Great for group stays or weekend chill.",
    name: "Arun, Hyderabad",
    logo: "https://static.tacdn.com/assets/s/6b5096f1.ico",
  },
];

const ReviewSlider = () => {
  return (
    <div className="w-full relative pt-4 md:pt-10 pb-4 bg-white testimonial">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(0 65 255 /50%) 1px, #ffffff 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>
      <div className="max-w-6xl relative z-10 mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-4 md:mb-8 lg:mb-2 lg:text-4xl lg:font-bold">
          Customer Reviews
        </h2>
        <p className="text-gray-700 mb-2">
          Hear it directly from our happy guests
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
          }}
          style={{ overflowY: "visible", marginTop: "1rem" }}
        >
          {reviews.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative bg-white min-h-[250px] h-[350px] rounded-2xl shadow-md md-2 md:px-8 py-5 flex flex-col justify-between text-center border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="absolute border-8 border-white bg-gray-100 rounded-full right-0 lg:-right-4 -top-5 p-1">
                  <img
                    src={t.logo}
                    className="w-8 h-8 object-contain rounded-full"
                    alt="review-logo"
                  />
                </div>
                {/* Top Quotation Mark */}
                <div className="absolute -top-4 left-4 text-yellow-500 text-8xl">
                  <img src="quats.svg" alt="quats" className="w-7 h-7" />
                </div>

                {/* Review Text */}
                <p className="text-gray-800 md:mt-5 mt-10 px-10 lg:px-0 text-base leading-relaxed">
                  {t.text}
                </p>

                {/* Name */}
                <p className="mt-6 text-lg font-semibold text-gray-900">
                  ~ {t.name}
                </p>

                {/* Rating */}
                <div className="flex justify-center mt-4 space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill="#FBBF24" stroke="#FBBF24" />
                  ))}
                </div>

                {/* Bottom Quotation Mark */}
                <div className="absolute -bottom-3 right-3 text-yellow-500 text-8xl">
                  <img src="quats2.svg" alt="quats" className="w-7 h-7" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
