import { motion } from 'framer-motion';

import { useSecondaryColor } from '../store/color';

interface ColorBarPrpos {
  value: number;
}

export default function ColorBar({ value }: ColorBarPrpos) {
  const secondaryColor = useSecondaryColor();

  return (
    <motion.div
      initial={{
        width: '0%',
        backgroundColor: secondaryColor === '#000' ? '#FFF' : '#000',
      }}
      animate={{
        width: `${(value / 255) * 100}%`,
        backgroundColor: secondaryColor,
      }}
      transition={{ ease: 'easeOut', duration: 0.7 }}
      className="h-1"
    />
  );
}
