import { borderRadius } from "./border-radius";

import { zIndexes } from "./z-indexes";

import * as typography from "./typography"

import {
  darkThemeStylesColors,
  lightThemeStylesColors,
  ColorType,
} from "./colors";

const commonStyles = { borderRadius, zIndexes,typography };

export type StylesType = typeof commonStyles & { colors: ColorType };

type ThemeType = { darkThemeStyles: StylesType; lightThemeStyles: StylesType };

export const styles: ThemeType = {
  darkThemeStyles: { ...commonStyles, colors: darkThemeStylesColors },
  lightThemeStyles: { ...commonStyles, colors: lightThemeStylesColors },
};
