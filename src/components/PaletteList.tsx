import Palette from './Palette';

import colors from '../data/colors';
import { Color } from '../types/color';

export default function PaletteList() {
  return (
    <section className="flex-1 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 max-w-[100px] md:max-w-none overflow-y-auto py-2 bg-[url(./assets/svgs/endless-clouds.svg)]">
      {colors.map((color: Color, index) => (
        <Palette key={color.rgb} color={color} index={index} />
      ))}
    </section>
  );
}
