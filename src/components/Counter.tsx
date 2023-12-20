import { animate, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  from?: number;
  to: number;
}

export default function Counter({ from = 0, to }: CounterProps) {
  const counterRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const controls = animate(from, to, {
      ease: 'easeInOut',
      duration: 0.7,
      onUpdate: (value) => {
        counter.textContent = String(value.toFixed(0));
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <motion.p ref={counterRef} />;
}
