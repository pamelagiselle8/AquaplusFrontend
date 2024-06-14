import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MotionDiv({
  children,
  duracion = 2,
  delay = 0,
  x = 0,
  y = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: x, y: y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duracion, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
