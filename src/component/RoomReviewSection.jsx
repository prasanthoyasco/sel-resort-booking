import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);
const reviews = [
  {
    id: 1,
    name: "Lakshmi",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: "8.5",
    date: "Published 54 minutes ago",
    title: "Great Location!!",
    text: "Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.",
  },
  {
    id: 2,
    name: "Tamil Selvi",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: "8.5",
    date: "Published 10 Oct. 2022",
    title: "Awesome Experience",
    text: "Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.",
  },
  {
    id: 3,
    name: "Selva Kumar",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: "9.0",
    date: "Published 11 Oct. 2022",
    title: "Really great dinner!!",
    text: "Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.",
  },
  {
    id: 4,
    name: "Tamil Selvi",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: "8.5",
    date: "Published 10 Oct. 2022",
    title: "Awesome Experience",
    text: "Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.",
  },
  {
    id: 5,
    name: "Selva Kumar",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: "9.0",
    date: "Published 11 Oct. 2022",
    title: "Really great dinner!!",
    text: "Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.",
  },
];

const ratings = [
  { label: "Comfort", score: 9.0 },
  { label: "Facilities", score: 9.5 },
  { label: "Location", score: 7.9 },
  { label: "Price", score: 8.0 },
  { label: "Food", score: 9.0 },
];

export default function RoomReviewSection() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: stickyRef.current,
        start: "top 20px",
        end: "bottom bottom",
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* LEFT SIDE: Scrolling Reviews */}
        <div className="lg:col-span-7 space-y-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-[#f3d09c] p-8 rounded-xl shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mb-1 border-2 border-white"
                    />
                    <p className="text-xs font-semibold text-gray-700">
                      {review.name}
                    </p>
                  </div>

                  <p className="text-lg font-bold text-[#ce8736]">
                    {review.rating}
                    <span className="text-xs text-black/50 font-normal">
                      /10 Rating average
                    </span>
                  </p>
                </div>

                <span className="text-xs italic text-black/50">
                  {review.date}
                </span>
              </div>

              <h4 className="font-bold text-gray-900 mb-2 italic">
                "{review.title}"
              </h4>

              <p className="text-sm text-gray-600 leading-relaxed italic">
                {review.text}
              </p>
            </div>
          ))}

          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="border-2 border-[#f3d09c] text-[#eb9737] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#eb9737] hover:text-white transition-all uppercase tracking-widest"
          >
            Leave a Review
          </button>
        </div>

        {/* RIGHT SIDE: GSAP pinned container */}
        <div ref={stickyRef} className="lg:col-span-5 w-full">

          <span
            data-aos="fade-left"
            className="text-[#f3d09c] uppercase tracking-[0.2em] text-xs font-bold"
          >
            Farm Retreat Room
          </span>

          <h2
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-5xl font-bold text-[#333] mt-2 mb-6"
          >
            Reviews
          </h2>

          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-gray-500 mb-10 leading-relaxed"
          >
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
          </p>

          {/* Progress Bars */}
          <div className="space-y-6 mb-10">
            {ratings.map((item, index) => (
              <div
                key={item.label}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-800 text-sm">
                    {item.label}
                  </span>
                  <span className="font-bold text-gray-800 text-sm">
                    {item.score.toFixed(1)}
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#eb9737] h-full transition-all duration-1000"
                    style={{ width: `${(item.score / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
