import styled, { css } from 'styled-components';

export type Variant = 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7';

export type TStylesType = {
  type?: 'primary' | 'ghost';
  color?: string;
  fontWeight?: 300 | 500 | 800 | 900;
};

type AlignStylesType = { align?: 'left' | 'center' | 'end' };

type MarginStylesType = { margin?: string };

export type StyledTextType = TStylesType & AlignStylesType & MarginStylesType;

export type TextType = { variant: Variant } & StyledTextType;

export const ColorStyles = css<TStylesType>`
  color: ${({ type, theme, color }) =>
    color
      ? color
      : type === 'ghost'
        ? theme.colors.text
        : theme.colors.contrast_text};
`;

export const AlignStyles = css<AlignStylesType>`
  text-align: ${({ align }) => align};
`;

export const MarginStyles = css<MarginStylesType>`
  margin: ${({ margin }) => margin};
`;

export const AdditionalStyles = css<StyledTextType>`
  ${ColorStyles};
  ${AlignStyles};
  ${MarginStyles};
`;

export const T1Styles = css<StyledTextType>`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.typography.fontWeight.lg};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.xxl};
  line-height: ${({ theme }) => theme.typography.lineHeight.xxl};
  ${AdditionalStyles};
`;

export const T2Styles = css<StyledTextType>`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.typography.fontWeight.lg};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.xl};
  ${AdditionalStyles};
`;

export const T3Styles = css<StyledTextType>`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.typography.fontWeight.lg};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.lg};
  ${AdditionalStyles};
`;

export const T4Styles = css<StyledTextType>`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.typography.fontWeight.md};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  ${AdditionalStyles};
`;

export const T5Styles = css<StyledTextType>`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.typography.fontWeight.md};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  ${AdditionalStyles};
`;

export const T6Styles = css<StyledTextType>`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.typography.fontWeight.md};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  ${AdditionalStyles};
`;

export const T7Styles = css<StyledTextType>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ?? theme.typography.fontWeight.sm};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.xs};
  ${AdditionalStyles};
`;

export const Text = styled.span<TextType>`
  ${({ variant }) => {
    switch (variant) {
      case 'T1':
        return T1Styles;
      case 'T2':
        return T2Styles;
      case 'T3':
        return T3Styles;
      case 'T4':
        return T4Styles;
      case 'T5':
        return T5Styles;
      case 'T6':
        return T6Styles;
      case 'T7':
        return T7Styles;
    }
  }}
`;
