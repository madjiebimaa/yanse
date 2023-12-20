import { motion } from 'framer-motion';

import { trimText } from '../lib/utils';
import { Color } from '../types/color';

interface PaletteProps {
  color: Color;
  index?: number;
}

export default function Palette({ color, index = 1 }: PaletteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.03 * index }}
      className="flex hover:bg-white"
    >
      <div
        style={{ backgroundColor: `#${color.rgb}` }}
        className="w-2 mr-2 shrink-0"
      />
      <div className="flex-1 flex flex-col">
        <p className="font-xano text-lg md:text-2xl">{trimText(color.name)}</p>
        <p className="font-bpt text-xs md:text-base">#{color.rgb}</p>
      </div>
    </motion.div>
  );
}
