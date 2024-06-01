export const darkThemeStylesColors = {
  primary: '#0A1F33',
  secondary: '#FF5733',
  tertiary: '#000000',

  text: '#B0BEC5',
  contrast_text: '#ECEFF1',

  background: '#000000',
  menuBackground: '#555',
  cardBackground: '#0D0D0D',

  alpha: '#FF5733',
  beta: '#0A4A4A',

  grayLight: '#37474F',
  grayDark: '#1C1C1C',

  highlight: '#263238',
  highlightDark: '#102027',
  shadow: '#0D0D0D',
  accent: '#32424A',

  error: '#FF0000',
  warning: '#E65100',
  success: '#1B5E20',
  info: '#01579B',

  largeBannerColors: {
    top: ['#3f2c4b', '#25254d', '#472139'],
    bottom: ['#0c0c1d', '#28283b', '#000000']
  }
};

export const lightThemeStylesColors = {
  primary: '#2E86C1',
  secondary: '#48C9B0',
  tertiary: '#AED6F1',

  text: '#212121',
  contrast_text: '#f5f6fa',

  background: '#ffffff',
  menuBackground: '#D6EAF8',
  cardBackground: '#D6EAF8',

  alpha: '#76D7C4',
  beta: '#3498DB',

  grayLight: '#D5DBDB',
  grayDark: '#85929E',

  highlight: '#85C1E9',
  highlightDark: '#2874A6',
  shadow: '#1A5276',
  accent: '#A3E4D7',

  error: '#E74C3C',
  warning: '#F39C12',
  success: '#27AE60',
  info: '#3498DB',

  largeBannerColors: {
    top: ['#c6c6f4', '#4545e7', '#32005e'],
    bottom: ['#9450be', '#4545e7', '#ff22aa']
  }
};

export type ColorType = typeof lightThemeStylesColors;

export type OfferType =
  | 'ServiceOffer'
  | 'MaterialRequest'
  | 'ToolMaterialSale'
  | 'ProjectCollaboration'
  | 'WorkshopsTraining'
  | 'WorkShowcase'
  | 'EventAnnouncement'
  | 'AdviceTips'
  | 'ToolMaterialReview'
  | 'JobVacancy';

type OfferTypeColor = {
  [K in OfferType]: string;
};

export const offerTypeColors: OfferTypeColor = {
  ServiceOffer: '#A7C7E7',
  MaterialRequest: '#F3D1F4',
  ToolMaterialSale: '#FFEDB1',
  ProjectCollaboration: '#C8E6C9',
  WorkshopsTraining: '#FFC0CB',
  WorkShowcase: '#B5EAD7',
  EventAnnouncement: '#FAD2E1',
  AdviceTips: '#ECD4FF',
  ToolMaterialReview: '#BFD8D2',
  JobVacancy: '#FFDFD3'
};
