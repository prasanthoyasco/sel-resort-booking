import { motion } from "framer-motion";

export default function StayGalleryAnimated() {
  const images = [
    {
      src: "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/689a6a04259adc7fa4a2c005_cta_1.avif",
      alt: "Product view 1",
      rotation: -20,
      delay: 0,
      from: "-150%",
    },
    {
      src: "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/689a6a049d45734c9c038bc9_cta_2.avif",
      alt: "Product view 2",
      rotation: 10,
      delay: 0.15,
      from: "150%",
    },
    {
      src: "https://cdn.prod.website-files.com/688eb7fda28d7033fb817172/689a6a0490bea4f3bd36e849_cta_3.avif",
      alt: "Product view 3",
      rotation: -5,
      delay: 0.3,
      from: "-150%",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 flex flex-col items-center">
      <div className="relative h-[450px] w-full max-w-3xl flex justify-center items-center">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            alt={img.alt}
            className="absolute w-full max-w-xs md:max-w-md rounded-xl shadow-2xl"
            initial={{ opacity: 0, x: img.from, scale: 0.9, rotate: img.rotation }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: img.delay }}
            viewport={{ once: true, amount: 0.4 }}
            style={{ zIndex: i + 1 }}
          />
        ))}
      </div>
      {/* Background Marquee Rows */}
  <div className="absolute inset-0 z-0 flex flex-col justify-center gap-10 overflow-hidden opacity-10 pointer-events-none">
    {/* Row 1 – Right to Left */}
    <motion.div
      className="whitespace-nowrap text-[120px] md:text-[180px] font-extrabold uppercase text-gray-400"
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
    >
      CREATE • DESIGN • BUILD • REPEAT • CREATE • DESIGN • BUILD • REPEAT •
    </motion.div>

    {/* Row 2 – Left to Right */}
    <motion.div
      className="whitespace-nowrap text-[120px] md:text-[180px] font-extrabold uppercase text-gray-400"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
    >
      IMAGINE • INSPIRE • CREATE • IMAGINE • INSPIRE • CREATE • IMAGINE •
    </motion.div>
  </div>
</section>
  );
}
