const statsData = {
  heading: {
    title: "Architectural Excellence",
    subtitle: "Built On Creative Vision",
    cta: "Discover More",
  },
  stats: [
    {
      value: "85%",
      description: "Delivering Eco-Friendly Projects",
      delay: 300,
    },
    {
      value: "45+",
      description: "Industry Awards And Accolades",
      delay: 400,
    },
  ],
};

const ArchitecturalStatsSection = () => {
  return (
    <section
      className="bg-white text-black"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-5 py-14 sm:py-16 md:pt-15 md:pb-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8 items-center mx-auto">

          {/* Left Content */}
          <div
            className="md:col-span-2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-semibold leading-tight">
              {statsData.heading.title}
              <br className="hidden sm:block" />
              {statsData.heading.subtitle}
            </h2>

            <button
              className="group mt-6 inline-flex items-center gap-2 border-b border-black/60 pb-1 text-sm font-medium tracking-wide transition-all hover:border-black"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {statsData.heading.cta}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Stats */}
          {statsData.stats.map((stat, index) => (
            <div
              key={index}
              className="md:col-span-1"
              data-aos="fade-up"
              data-aos-delay={stat.delay}
            >
              <div className="text-[#c8a47e] text-5xl sm:text-6xl font-semibold">
                {stat.value}
              </div>
              <p className="mt-3 text-base sm:text-lg text-black/80 leading-relaxed">
                {stat.description.split(" ").slice(0, 2).join(" ")}
                <br className="hidden sm:block" />
                {stat.description.split(" ").slice(2).join(" ")}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ArchitecturalStatsSection;
