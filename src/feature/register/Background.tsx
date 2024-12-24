import React from "react";
import { motion } from "motion/react";

const animatedElements = [
  { className: "absolute top-0 left-0" },
  { className: "star absolute right-24 top-20" },
  { className: "starburst absolute top-10 left-28 bg-red-500" },
  { className: "arc absolute rotate-[30deg] left-14 bottom-20" },
  { className: "matrix-cubes absolute right-28 bottom-5" },
  { className: "sphere absolute right-20 bottom-24" },
  { className: "hamburger-menu absolute right-96 top-72" },
  { className: "spiral absolute left-64" },
];

const animation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  },
};

const Background = () => {
  return (
    <>
      {animatedElements.map((element, index) => (
        <motion.div
          key={index}
          {...animation}
          className={element.className}
        ></motion.div>
      ))}
    </>
  );
};

export default Background;
