import { motion } from "framer-motion";

export default function MotionDiv({ children, duracion = 2 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: duracion }}
    >
      {children}
    </motion.div>
  );
}
