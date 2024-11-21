import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedCounter = ({ targetValue }) => {
  const props = useSpring({
    number: targetValue,
    from: { number: 0 },
    config: { duration: 1300 },
  });

  return <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>;
};

export default AnimatedCounter;
