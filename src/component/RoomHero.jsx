export default function RoomHero({
  image,
  eyebrow = "LUXURY HOTEL EXPERIENCE",
  title = "SIERRA DOUBLE ROOM",
  subtitle = "Exquisite furnishings for a cosy ambience",
  height = "h-screen",
}) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-4 text-xs tracking-[0.25em] text-[#eea159] uppercase"
          >
            {eyebrow}
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="250"
            className="mb-4 text-4xl font-semibold text-white md:text-6xl"
          >
            {title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base text-white/80 md:text-lg"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
