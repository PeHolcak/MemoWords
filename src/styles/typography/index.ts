
export type SizesObject = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}


type ResponsibleSizeValue = {
  mobile: string
  desktop: string
}

type TypographySizesObject = SizesObject

export type FontSizeType = TypographySizesObject

export type LineHeightType = TypographySizesObject

export type LetterSpacingType = TypographySizesObject

export type FontWeightType = {
  sm: string
  md: string
  lg: string
}

export const fontSize: FontSizeType = {
  xs: '.6rem',
  sm: '.8rem',
  md: '1rem',
  lg: '1.4rem',
  xl: '1.8rem',
  xxl: '2.8rem',
}

export const lineHeight: LineHeightType = {
  xs: '.8rem',
  sm: '1rem',
  md: '1.2rem',
  lg: '1.6rem',
  xl: '2.1rem',
  xxl: '3.3rem',
}

export const letterSpacing: LetterSpacingType = {
  xs: '.4px',
  sm: '.4px',
  md: '.4px',
  lg: '.4px',
  xl: '1px',
  xxl: '3px',
}

export const fontWeight: FontWeightType = {
  sm: '300',
  md: '400',
  lg: '700',
}
