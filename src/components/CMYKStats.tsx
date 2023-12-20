import Counter from './Counter';

import { Color } from '../types/color';

interface CMYKStatsProps {
  cmyk: Color['cmyk'];
}

export default function CMYKStats({ cmyk }: CMYKStatsProps) {
  const [c, m, y, k] = cmyk.match(/.{1,3}/g) || ['0', '0', '0', '0'];

  return (
    <div className="flex flex-col items-end gap-2 pt-4 pr-8 font-mono text-lg md:text-2xl">
      <div className="relative">
        <Counter to={parseInt(c)} />
        <p className="absolute -top-3 -right-3 text-sm md:text-base">c</p>
      </div>
      <div className="relative">
        <Counter to={parseInt(m)} />
        <p className="absolute -top-3 -right-3 text-sm md:text-base">m</p>
      </div>
      <div className="relative">
        <Counter to={parseInt(y)} />
        <p className="absolute -top-3 -right-3 text-sm md:text-base">y</p>
      </div>
      <div className="relative">
        <Counter to={parseInt(k)} />
        <p className="absolute -top-3 -right-3 text-sm md:text-base">k</p>
      </div>
    </div>
  );
}
