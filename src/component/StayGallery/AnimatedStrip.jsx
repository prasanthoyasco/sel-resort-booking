// AnimatedStrip.jsx
import { motion } from 'framer-motion';

const AnimatedStrip = ({ children, reverse = false }) => {
  // Define animation for infinite horizontal scroll
  const scrollVariants = {
    animate: {
      x: reverse ? ["100%", "0%"] : ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust speed here
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className={`overflow-hidden ${reverse ? 'rtl' : ''}`}>
      <motion.div
        className="flex whitespace-nowrap"
        variants={scrollVariants}
        initial="initial" // Start the animation immediately
        animate="animate"
      >
        {/* Repeat the children content multiple times to ensure seamless looping */}
        {Array(10).fill(children).map((content, index) => (
          <div key={index} className="flex items-center">
            {content}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedStrip;