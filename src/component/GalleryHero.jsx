import GalleryCard from "./GalleryCard";

export default function GalleryHero({
  height = "h-[70vh]",
  backgroundImage,
  overlay = true,
  overlayOpacity = "bg-black/40",
  title,
  bottomCurve = true,
  cards = [],
  showPlayButton = true,
  playImage,
  playTextLeft = "watch a video",
  playTextRight = "about us",
}) {
  return (
    <section
      className={`relative w-full overflow-hidden ${height}`}
      data-aos="fade"
    >
      {/* Background */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Overlay */}
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}

      {/* Center Heading */}
      {title && (
        <div
          className="relative z-10 flex h-full items-center justify-center text-white"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h1 className="text-4xl font-semibold md:text-5xl text-center capitalize">
            {title}
          </h1>
        </div>
      )}

      {/* Bottom White Curve (NO AOS here) */}
      {bottomCurve && (
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 180"
            className="block w-full translate-y-0.5 scale-[1.01] origin-bottom"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C240,140 480,140 720,120 960,100 1200,40 1440,60 L1440,200 L0,200 Z"
              fill="#fff"
            />
          </svg>
        </div>
      )}

      {/* Floating Cards */}
      {cards?.map((card, index) => (
        <div
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={300 + index * 120}
          className={`absolute bottom-5 z-20 hidden md:block animate-float ${
            card.position === "left" ? "left-18" : "right-16"
          }`}
          style={{
            animationDelay: `${(index + 1) * 1.2}s`,
          }}
        >
          <GalleryCard image={card.image} title={card.title} />
        </div>
      ))}

      {/* Play Button */}
      {showPlayButton && (
        <div
          className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 text-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="mx-auto mb-2 flex h-18 w-18 items-center justify-center rounded-full bg-orange-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-200">
              {playImage && (
                <img src={playImage} alt="Play" className="ml-1" />
              )}
            </div>
          </div>

          <div className="flex items-center gap-16 text-sm text-gray-700">
            <span>{playTextLeft}</span>
            <span>{playTextRight}</span>
          </div>
        </div>
      )}
    </section>
  );
}
