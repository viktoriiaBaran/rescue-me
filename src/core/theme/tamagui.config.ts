import { createFont, createTamagui, createTokens } from 'tamagui';

const poppinsFont = createFont({
  family: 'Poppins, sans-serif',
  size: {
    displayL: 56,
    displayM: 45,
    displayS: 36,
    headlineL: 32,
    headlineM: 28,
    headlineS: 24,
    titleL: 22,
    titleM: 16,
    titleS: 14,
    labelL: 14,
    labelM: 12,
    labelS: 11,
    bodyL: 16,
    bodyM: 14,
    true: 14,
    bodyS: 12,
    button: 13,
    buttonM: 13,
    buttonS: 12,
    inputL: 16,
    inputR: 13,
    navR: 10,
  },
  lineHeight: {
    displayL: 64,
    displayM: 52,
    displayS: 43,
    headlineL: 39,
    headlineM: 35,
    headlineS: 31,
    titleL: 29,
    titleM: 23,
    titleS: 21,
    labelL: 21,
    labelM: 19,
    labelS: 18,
    bodyL: 24,
    bodyM: 21,
    true: 21,
    bodyS: 19,
    button: 35,
    buttonM: 16,
    buttonS: 16,
    inputL: 24,
    inputR: 20,
    navR: 15,
  },
  weight: {
    thin: '100',
    extraLight: '200',
    light: '300',
    true: '400',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
  letterSpacing: {},
  face: {
    100: {
      normal: 'Poppins-Thin',
      italic: 'Poppins-ThinItalic',
    },
    200: {
      normal: 'Poppins-ExtraLight',
      italic: 'Poppins-ExtraLightItalic',
    },
    300: {
      normal: 'Poppins-Light',
      italic: 'Poppins-LightItalic',
    },
    400: {
      normal: 'Poppins-Regular',
      italic: 'Poppins-RegularItalic',
    },
    true: {
      normal: 'Poppins-Regular',
      italic: 'Poppins-RegularItalic',
    },
    500: {
      normal: 'Poppins-Medium',
      italic: 'Poppins-MediumItalic',
    },
    600: {
      normal: 'Poppins-SemiBold',
      italic: 'Poppins-SemiBoldItalic',
    },
    700: {
      normal: 'Poppins-Bold',
      italic: 'Poppins-BoldItalic',
    },
    800: {
      normal: 'Poppins-ExtraBold',
      italic: 'Poppins-ExtraBoldItalic',
    },
  },
});

export const size = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 40,
  8: 48,
  9: 64,
  10: 80,
  true: 24,
};

const radius = {
  0: 0,
  1: 8,
  2: 12,
  3: 16,
  4: 24,
};

const shorthands = {
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pr: 'paddingRight',
  pl: 'paddingLeft',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  mr: 'marginRight',
  ml: 'marginLeft',
  mt: 'marginTop',
  mb: 'marginBottom',
  m: 'margin',
  p: 'padding',
  w: 'width',
  h: 'height',
  bg: 'backgroundColor',
  ai: 'alignItems',
  jc: 'justifyContent',
  fs: 'fontSize',
  lh: 'lineHeight',
  fw: 'fontWeight',
  ta: 'textAlign',
} as const;

export const themeColors = {
  black: '#141313',
  white: '#FFF',

  peach: '#FF865D',
  blue: '#0358FF',
  bgBlue: '#3582C4',

  red: '#E14E4E',
  green: '#35C488',
  green1: '#218288',

  sky1: '#F9F9F9',
  sky2: 'rgba(32, 26, 26, 0.10)',
  sky3: '#F1F3F9',
  sky4: 'rgba(53, 130, 196, 0.16)',

  gray1: '#FAFAFA',
  gray2: '#F6F6F6',
  gray3: '#F1F1F1',
  gray4: '#EDEDED',
  gray5: '#E3E3E3',
  gray6: '#DADADA',
  gray7: '#D1D1D1',
  gray8: '#B3B3B3',
  gray9: '#969696',
  gray10: '#787878',
  gray11: '#696969',
  gray12: '#5C5C5C',
  gray13: '#454545',
  gray14: '#2E2E2E',
  gray15: '#232323',
  gray16: '#171717',
  gray50: '#FAFAFA',

  sunset: '#FF7039',
  sunset1: '#FFF0EB',
  sunset2: '#FFE0D6',
  sunset3: '#FFD1C2',
  sunset4: '#FFC2AE',
  sunset5: '#FEA385',
  sunset6: '#FE855D',

  celadon: '#248F95',
  celadon1: '#EAF2EF',
  celadon2: '#C8EAEB',
  celadon3: '#B6DEE0',
  celadon4: '#A3D3D5',
  celadon5: '#91C7CA',
  celadon6: '#6BB0B4',
  celadon7: '#46999E',

  sand: '#DAB692',
  sand1: '#FBF8F4',
  sand2: '#F7F0E9',
  sand3: '#F4E9DE',
  sand4: '#F0E2D3',
  sand5: '#E8D3BE',
  sand6: '#E1C5A8',

  breeze1: '#C2DCD1',
};

export const tokens = createTokens({
  size,
  space: { ...size },
  radius,
  zIndex: { 0: 0, 1: 100, 2: 200, 3: 300, 4: 400, 5: 500 },
  color: themeColors,
});
const themes = {
  primary: {},
};

const tamaguiConfig = createTamagui({
  themes,
  defaultTheme: 'light',
  shorthands,
  fonts: {
    heading: poppinsFont,
    body: poppinsFont,
  },
  tokens,
  defaultProps: {
    Separator: {
      borderColor: '#201A1A',
      borderWidth: 0.5,
      opacity: 0.1,
    },
  },
  media: {
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    md: { maxWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    lg: { maxWidth: 1120 },
    gtLg: { minWidth: 1120 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
});

type AppConfig = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
