import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const InfiniteScrollText = ({ text }) => {
  const controls = useAnimationControls();
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    // Measure the width of the text
    const tempElement = document.createElement('span');
    tempElement.style.visibility = 'hidden';
    tempElement.style.position = 'absolute';
    tempElement.style.whiteSpace = 'nowrap';
    tempElement.innerHTML = text;
    document.body.appendChild(tempElement);
    setTextWidth(tempElement.offsetWidth);
    document.body.removeChild(tempElement);

    // Start the animation
    controls.start((i) => ({
      x: [i * textWidth, -textWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    }));
  }, [text, controls]);

  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          custom={i}
          animate={controls}
          className="absolute left-0 top-0 inline-block"
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default InfiniteScrollText;