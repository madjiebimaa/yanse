import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

import { usePrimaryColor, useSecondaryColor } from '../store/color';

export default function ColorDetails() {
  const primaryColor = usePrimaryColor();
  const secondaryColor = useSecondaryColor();

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(
        scope.current,
        { opacity: [0, 1], x: [100, 0] },
        { ease: 'easeOut', duration: 0.7 }
      );
    };

    animation();
  }, [animate, scope, primaryColor, secondaryColor]);

  return (
    <motion.section
      initial={{
        color: secondaryColor === '#000' ? '#FFF' : '#000',
        backgroundColor: `#FFF`,
      }}
      animate={{
        color: secondaryColor,
        backgroundColor: `#${primaryColor ? primaryColor.rgb : 'FFF'}`,
      }}
      transition={{ ease: 'easeInOut', duration: 0.7 }}
      className="sticky top-0 flex-1 flex flex-col justify-between max-w-2xl"
    >
      <div className="flex-1 flex justify-between items-end p-4">
        <div ref={scope} className="flex items-end gap-4">
          <h1
            style={{ writingMode: 'vertical-lr' }}
            className="font-xano text-5xl md:text-7xl"
          >
            {primaryColor ? primaryColor.name : '日本の伝統色'}
          </h1>
          <h2
            style={{ writingMode: 'vertical-lr' }}
            className="font-bpt tracking-widest md:text-2xl"
          >
            {primaryColor
              ? primaryColor.color
              : 'The Traditional Colors of Japan'}
          </h2>
        </div>
      </div>
    </motion.section>
  );
}
