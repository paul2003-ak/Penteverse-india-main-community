import { motion } from "motion/react";

const Card = ({ text, image, containerRef, rotate = "0deg", top = "0%", left = "0%" }) => {
  return image && !text ? (
    <motion.img
      src={image}
      alt="icon"
      className="absolute w-16 cursor-grab active:cursor-grabbing hover:z-50"
      style={{ top, left, rotate }}
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
    />
  ) : (
    <motion.div
      className="absolute px-4 py-3 text-sm font-bold text-center rounded-xl cursor-grab active:cursor-grabbing hover:z-50 backdrop-blur-md border border-white/20 shadow-lg select-none"
      // Cool gradient background for the cards
      style={{ 
        top, 
        left, 
        rotate,
        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        color: "#E4E4E6"
      }}
      whileHover={{ scale: 1.1, rotate: 0, backgroundColor: "rgba(255,255,255,0.15)" }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
    >
      {text}
    </motion.div>
  );
};

export default Card;