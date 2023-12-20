import ColorBar from './ColorBar';
import Counter from './Counter';

import { Color } from '../types/color';

interface RGBStatsProps {
  rgb: Color['Drgb'];
}

export default function RGBStats({ rgb }: RGBStatsProps) {
  const [r, g, b] = rgb;

  return (
    <>
      <div className="flex flex-col space-y-1 pt-1">
        <ColorBar value={r} />
        <ColorBar value={g} />
        <ColorBar value={b} />
      </div>
      <div className="flex justify-between items-center p-2 md:px-8 font-mono text-lg md:text-2xl">
        <>
          <p>R</p>
          <Counter to={r} />
        </>
        <>
          <p>G</p>
          <Counter to={g} />
        </>
        <>
          <p>B</p>
          <Counter to={b} />
        </>
      </div>
    </>
  );
}
