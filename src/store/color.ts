import { create } from 'zustand';
import colors from '../data/colors';
import { getOppositeContrast, toGrayScale } from '../lib/utils';
import { Color } from '../types/color';

type ColorState = {
  primaryColor: Color | null;
  secondaryColor: string;
};

type ColorActions = {
  actions: {
    selectPrimaryColor: (color: Color) => void;
    randomPrimaryColor: () => void;
  };
};

const initialState: ColorState = {
  primaryColor: null,
  secondaryColor: '#000',
};

const colorStore = create<ColorState & ColorActions>()((set) => ({
  ...initialState,
  actions: {
    selectPrimaryColor: (color) =>
      set({
        primaryColor: color,
        secondaryColor: getOppositeContrast(toGrayScale(color.Drgb)),
      }),
    randomPrimaryColor: () =>
      set(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomIndex];
        return {
          primaryColor: color,
          secondaryColor: getOppositeContrast(toGrayScale(color.Drgb)),
        };
      }),
  },
}));

export const usePrimaryColor = () => colorStore((state) => state.primaryColor);
export const useSecondaryColor = () =>
  colorStore((state) => state.secondaryColor);
export const useColorActions = () => colorStore((state) => state.actions);
