/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import * as stylex from '@stylexjs/stylex';

/**
 * o--o o    o   o o-O-o o-o       o--o  o-o  o   o o-O-o  o-o
 * |    |    |   |   |   |  \      |    o   o |\  |   |   |
 * O-o  |    |   |   |   |   O     O-o  |   | | \ |   |    o-o
 * |    |    |   |   |   |  /      |    o   o |  \|   |       |
 * o    O---o o-o  o-O-o o-o       o     o-o  o   o   o   o--o
 *
 * Reference: https://utopia.fyi/type/calculator
 *
 * The following constants are used to calculate fluid typography.
 * Feel free to change these initial numbers to suit your needs.
 *
 * StyleX can compute all of this at compile time as all the information
 * is statically available in the same file and the only functions used are
 * the Math.pow and Math.round functions.
 *
 * NOTE: Any custom functions will not be able to be computed at compile time.
 */
const MIN_WIDTH = 320;
const MAX_WIDTH = 1240;
const MIN_SCALE = 1.2;
const MAX_SCALE = 1.333;
const MIN_BASE_SIZE = 16;
const MAX_BASE_SIZE = 20;

// Font sizes in `rem` units
const MIN_FONT = {
  xxs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MIN_BASE_SIZE / MIN_SCALE / 0.16) / 100,
  p: Math.round(MIN_BASE_SIZE / 4) / 4,
  h5: Math.round((MIN_BASE_SIZE * MIN_SCALE) / 0.16) / 100,
  h4: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 5)) / 0.16) / 100,
};
// Font sizes in `rem` units
const MAX_FONT = {
  xxs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MAX_BASE_SIZE / MAX_SCALE / 0.16) / 100,
  p: Math.round(MAX_BASE_SIZE / 4) / 4,
  h5: Math.round((MAX_BASE_SIZE * MAX_SCALE) / 0.16) / 100,
  h4: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 5)) / 0.16) / 100,
};
const SLOPE = {
  xxs: (16 * (MAX_FONT.xxs - MIN_FONT.xxs)) / (MAX_WIDTH - MIN_WIDTH),
  xs: (16 * (MAX_FONT.xs - MIN_FONT.xs)) / (MAX_WIDTH - MIN_WIDTH),
  sm: (16 * (MAX_FONT.sm - MIN_FONT.sm)) / (MAX_WIDTH - MIN_WIDTH),
  p: (16 * (MAX_FONT.p - MIN_FONT.p)) / (MAX_WIDTH - MIN_WIDTH),
  h5: (16 * (MAX_FONT.h5 - MIN_FONT.h5)) / (MAX_WIDTH - MIN_WIDTH),
  h4: (16 * (MAX_FONT.h4 - MIN_FONT.h4)) / (MAX_WIDTH - MIN_WIDTH),
  h3: (16 * (MAX_FONT.h3 - MIN_FONT.h3)) / (MAX_WIDTH - MIN_WIDTH),
  h2: (16 * (MAX_FONT.h2 - MIN_FONT.h2)) / (MAX_WIDTH - MIN_WIDTH),
  h1: (16 * (MAX_FONT.h1 - MIN_FONT.h1)) / (MAX_WIDTH - MIN_WIDTH),
};
const INTERCEPT = {
  xxs: Math.round(100 * (MIN_FONT.xxs - SLOPE.xxs * (MIN_WIDTH / 16))) / 100,
  xs: Math.round(100 * (MIN_FONT.xs - SLOPE.xs * (MIN_WIDTH / 16))) / 100,
  sm: Math.round(100 * (MIN_FONT.sm - SLOPE.sm * (MIN_WIDTH / 16))) / 100,
  p: Math.round(100 * (MIN_FONT.p - SLOPE.p * (MIN_WIDTH / 16))) / 100,
  h5: Math.round(100 * (MIN_FONT.h5 - SLOPE.h5 * (MIN_WIDTH / 16))) / 100,
  h4: Math.round(100 * (MIN_FONT.h4 - SLOPE.h4 * (MIN_WIDTH / 16))) / 100,
  h3: Math.round(100 * (MIN_FONT.h3 - SLOPE.h3 * (MIN_WIDTH / 16))) / 100,
  h2: Math.round(100 * (MIN_FONT.h2 - SLOPE.h2 * (MIN_WIDTH / 16))) / 100,
  h1: Math.round(100 * (MIN_FONT.h1 - SLOPE.h1 * (MIN_WIDTH / 16))) / 100,
};

// prettier-ignore
export const text = stylex.defineVars({
  xxs: `clamp(${ Math.min(MIN_FONT.xxs) }rem, calc(${ INTERCEPT.xxs }rem + ${ Math.round(10000 * SLOPE.xxs) / 100 }vw), ${ Math.max(MAX_FONT.xxs) }rem)`,
  xs:  `clamp(${ Math.min(MIN_FONT.xs ) }rem, calc(${ INTERCEPT.xs  }rem + ${ Math.round(10000 * SLOPE.xs ) / 100 }vw), ${ Math.max(MAX_FONT.xs ) }rem)`,
  sm:  `clamp(${ Math.min(MIN_FONT.sm ) }rem, calc(${ INTERCEPT.sm  }rem + ${ Math.round(10000 * SLOPE.sm ) / 100 }vw), ${ Math.max(MAX_FONT.sm ) }rem)`,
  p:   `clamp(${ Math.min(MIN_FONT.p  ) }rem, calc(${ INTERCEPT.p   }rem + ${ Math.round(10000 * SLOPE.p  ) / 100 }vw), ${ Math.max(MAX_FONT.p  ) }rem)`,
  h5:  `clamp(${ Math.min(MIN_FONT.h5 ) }rem, calc(${ INTERCEPT.h5  }rem + ${ Math.round(10000 * SLOPE.h5 ) / 100 }vw), ${ Math.max(MAX_FONT.h5 ) }rem)`,
  h4:  `clamp(${ Math.min(MIN_FONT.h4 ) }rem, calc(${ INTERCEPT.h4  }rem + ${ Math.round(10000 * SLOPE.h4 ) / 100 }vw), ${ Math.max(MAX_FONT.h4 ) }rem)`,
  h3:  `clamp(${ Math.min(MIN_FONT.h3 ) }rem, calc(${ INTERCEPT.h3  }rem + ${ Math.round(10000 * SLOPE.h3 ) / 100 }vw), ${ Math.max(MAX_FONT.h3 ) }rem)`,
  h2:  `clamp(${ Math.min(MIN_FONT.h2 ) }rem, calc(${ INTERCEPT.h2  }rem + ${ Math.round(10000 * SLOPE.h2 ) / 100 }vw), ${ Math.max(MAX_FONT.h2 ) }rem)`,
  h1:  `clamp(${ Math.min(MIN_FONT.h1 ) }rem, calc(${ INTERCEPT.h1  }rem + ${ Math.round(10000 * SLOPE.h1 ) / 100 }vw), ${ Math.max(MAX_FONT.h1 ) }rem)`,
});

/**
 * o--o o    o   o o-O-o o-o        o-o  o--o    O    o-o o--o
 * |    |    |   |   |   |  \      |     |   |  / \  /    |
 * O-o  |    |   |   |   |   O      o-o  O--o  o---oO     O-o
 * |    |    |   |   |   |  /          | |     |   | \    |
 * o    O---o o-o  o-O-o o-o       o--o  o     o   o  o-o o--o
 *
 * Reference: https://utopia.fyi/space/calculator
 *
 * Similar to the fluid typography, we can create fluid values for spacing.
 * Using similar formulas and similar scales.
 *
 * NOTE: It is common to have more varied needs for spacing than for font-size.
 * So feel free to add some more values by following the pattern below.
 *
 * EXCEPT: We are using `px` instead of `rem`
 * ------------------------------------------
 * When talking about font-size, it is the best practice to use
 * `rem` so that an end user can change the font-size using the
 * browser's font-size setting.
 *
 * However, when talking about spacing, it is the best practice to
 * use `px` because using `rems` here makes font-size behave like zoom.
 *
 * Users that prefer larger text, don't necessarily want larger spacing as well.
 *
 */

const MULT = {
  xxxs: 0.25,
  xxs: 0.5,
  xs: 0.75,
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 3,
  xxl: 4,
  xxxl: 6,
  xxxxl: 8,
};
const MIN_SPACE = {
  xxxs: MULT.xxxs * MIN_BASE_SIZE,
  xxs: MULT.xxs * MIN_BASE_SIZE,
  xs: MULT.xs * MIN_BASE_SIZE,
  sm: MULT.sm * MIN_BASE_SIZE,
  md: MULT.md * MIN_BASE_SIZE,
  lg: MULT.lg * MIN_BASE_SIZE,
  xl: MULT.xl * MIN_BASE_SIZE,
  xxl: MULT.xxl * MIN_BASE_SIZE,
  xxxl: MULT.xxxl * MIN_BASE_SIZE,
  xxxxl: MULT.xxxxl * MIN_BASE_SIZE,
};
const MAX_SPACE = {
  xxxs: MULT.xxxs * MAX_BASE_SIZE,
  xxs: MULT.xxs * MAX_BASE_SIZE,
  xs: MULT.xs * MAX_BASE_SIZE,
  sm: MULT.sm * MAX_BASE_SIZE,
  md: MULT.md * MAX_BASE_SIZE,
  lg: MULT.lg * MAX_BASE_SIZE,
  xl: MULT.xl * MAX_BASE_SIZE,
  xxl: MULT.xxl * MAX_BASE_SIZE,
  xxxl: MULT.xxxl * MAX_BASE_SIZE,
  xxxxl: MULT.xxxxl * MAX_BASE_SIZE,
};
const SLOPE_SPACE = {
  xxxs: (MAX_SPACE.xxxs - MIN_SPACE.xxxs) / (MAX_WIDTH - MIN_WIDTH),
  xxs: (MAX_SPACE.xxs - MIN_SPACE.xxs) / (MAX_WIDTH - MIN_WIDTH),
  xs: (MAX_SPACE.xs - MIN_SPACE.xs) / (MAX_WIDTH - MIN_WIDTH),
  sm: (MAX_SPACE.sm - MIN_SPACE.sm) / (MAX_WIDTH - MIN_WIDTH),
  md: (MAX_SPACE.md - MIN_SPACE.md) / (MAX_WIDTH - MIN_WIDTH),
  lg: (MAX_SPACE.lg - MIN_SPACE.lg) / (MAX_WIDTH - MIN_WIDTH),
  xl: (MAX_SPACE.xl - MIN_SPACE.xl) / (MAX_WIDTH - MIN_WIDTH),
  xxl: (MAX_SPACE.xxl - MIN_SPACE.xxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxl: (MAX_SPACE.xxxl - MIN_SPACE.xxxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxxl: (MAX_SPACE.xxxxl - MIN_SPACE.xxxxl) / (MAX_WIDTH - MIN_WIDTH),
};
// rounded to the nearest 0.25px
const INTERCEPT_SPACE = {
  xxxs: Math.round(4 * (MIN_SPACE.xxxs - SLOPE_SPACE.xxxs * MIN_WIDTH)) / 4,
  xxs: Math.round(4 * (MIN_SPACE.xxs - SLOPE_SPACE.xxs * MIN_WIDTH)) / 4,
  xs: Math.round(4 * (MIN_SPACE.xs - SLOPE_SPACE.xs * MIN_WIDTH)) / 4,
  sm: Math.round(4 * (MIN_SPACE.sm - SLOPE_SPACE.sm * MIN_WIDTH)) / 4,
  md: Math.round(4 * (MIN_SPACE.md - SLOPE_SPACE.md * MIN_WIDTH)) / 4,
  lg: Math.round(4 * (MIN_SPACE.lg - SLOPE_SPACE.lg * MIN_WIDTH)) / 4,
  xl: Math.round(4 * (MIN_SPACE.xl - SLOPE_SPACE.xl * MIN_WIDTH)) / 4,
  xxl: Math.round(4 * (MIN_SPACE.xxl - SLOPE_SPACE.xxl * MIN_WIDTH)) / 4,
  xxxl: Math.round(4 * (MIN_SPACE.xxxl - SLOPE_SPACE.xxxl * MIN_WIDTH)) / 4,
  xxxxl: Math.round(4 * (MIN_SPACE.xxxxl - SLOPE_SPACE.xxxxl * MIN_WIDTH)) / 4,
};

// prettier-ignore
export const spacing = stylex.defineVars({
  xxxs:  `clamp(${MIN_SPACE.xxxs  }px, calc(${INTERCEPT_SPACE.xxxs  }px + ${ Math.round(10000 * SLOPE_SPACE.xxxs  ) / 100 }vw), ${MAX_SPACE.xxxs  }px)`,
  xxs:   `clamp(${MIN_SPACE.xxs   }px, calc(${INTERCEPT_SPACE.xxs   }px + ${ Math.round(10000 * SLOPE_SPACE.xxs   ) / 100 }vw), ${MAX_SPACE.xxs   }px)`,
  xs:    `clamp(${MIN_SPACE.xs    }px, calc(${INTERCEPT_SPACE.xs    }px + ${ Math.round(10000 * SLOPE_SPACE.xs    ) / 100 }vw), ${MAX_SPACE.xs    }px)`,
  sm:    `clamp(${MIN_SPACE.sm    }px, calc(${INTERCEPT_SPACE.sm    }px + ${ Math.round(10000 * SLOPE_SPACE.sm    ) / 100 }vw), ${MAX_SPACE.sm    }px)`,
  md:    `clamp(${MIN_SPACE.md    }px, calc(${INTERCEPT_SPACE.md    }px + ${ Math.round(10000 * SLOPE_SPACE.md    ) / 100 }vw), ${MAX_SPACE.md    }px)`,
  lg:    `clamp(${MIN_SPACE.lg    }px, calc(${INTERCEPT_SPACE.lg    }px + ${ Math.round(10000 * SLOPE_SPACE.lg    ) / 100 }vw), ${MAX_SPACE.lg    }px)`,
  xl:    `clamp(${MIN_SPACE.xl    }px, calc(${INTERCEPT_SPACE.xl    }px + ${ Math.round(10000 * SLOPE_SPACE.xl    ) / 100 }vw), ${MAX_SPACE.xl    }px)`,
  xxl:   `clamp(${MIN_SPACE.xxl   }px, calc(${INTERCEPT_SPACE.xxl   }px + ${ Math.round(10000 * SLOPE_SPACE.xxl   ) / 100 }vw), ${MAX_SPACE.xxl   }px)`,
  xxxl:  `clamp(${MIN_SPACE.xxxl  }px, calc(${INTERCEPT_SPACE.xxxl  }px + ${ Math.round(10000 * SLOPE_SPACE.xxxl  ) / 100 }vw), ${MAX_SPACE.xxxl  }px)`,
  xxxxl: `clamp(${MIN_SPACE.xxxxl }px, calc(${INTERCEPT_SPACE.xxxxl }px + ${ Math.round(10000 * SLOPE_SPACE.xxxxl ) / 100 }vw), ${MAX_SPACE.xxxxl }px)`,
});



export const display = stylex.create({
  inlineFlex: {
    display: "inline-flex",
  },
  flex: {
    display: "flex",
  },
  block: {
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
  },
  grid: {
    display: "grid",
  },
});


// export const inlineFlex = stylex.create({
//   columnGapSmall: {
//     display: "inline-flex",
//     columnGap: spacing.sm,
//   },
//   columnGapMedium: {
//     display: "inline-flex",
//     columnGap: spacing.medium,
//   },
//   columnGapLarge: {
//     display: "inline-flex",
//     columnGap: spacing.large,
//   },
//   columnGapXLarge: {
//     display: "inline-flex",
//     columnGap: spacing.xlarge,
//   },
//   columnGapXXLarge: {
//     display: "inline-flex",
//     columnGap: spacing.xxlarge,
//   },
//   columnGapXXXLarge: {
//     display: "inline-flex",
//     columnGap: spacing.xxxlarge,
//   },
// });

// export const grid = stylex.create({
//   rowGapSmall: {
//     display: "grid",
//     rowGap: spacing.sm,
//   },
//   rowGapMedium: {
//     display: "grid",
//     rowGap: spacing.md,
//   },
//   rowGapLarge: {
//     display: "grid",
//     rowGap: spacing.lg,
//   },
//   rowGapXLarge: {
//     display: "grid",
//     rowGap: spacing.xl,
//   },
//   rowGapXXLarge: {
//     display: "grid",
//     rowGap: spacing.xxl,
//   },
//   rowGapXXXLarge: {
//     display: "grid",
//     rowGap: spacing.xxxl,
//   },
// });

/**
 * Color Tokens
 */
const DARK_MODE = '@media (prefers-color-scheme: dark)';


export const colors = stylex.defineVars({
  success: "hsl(140, 85%, 25%)",
  successAccent: "hsl(140, 85%, 35%)",

  danger: "hsl(347, 88%, 42%)",
  dangerAccent: "hsl(347, 88%, 52%)",

  // Primary
  // These are the splashes of color that should
  // appear the most in your UI, and are the ones that determine the
  // overall "look" of the site. Use these for things like primary actions,
  // links, navigation items, icons, accent borders, or text you want to emphasize.
  primary950: "hsl(170, 97%, 8%)",
  primary900: "hsl(170, 97%, 15%)",
  primary800: "hsl(168, 80%, 23%)",
  primary700: "hsl(166, 72%, 28%)",
  primary600: "hsl(164, 71%, 34%)",
  primary500: "hsl(162, 63%, 41%)",
  primary400: "hsl(160, 51%, 49%)",
  primary300: "hsl(158, 58%, 62%)",
  primary200: "hsl(156, 73%, 74%)",
  primary100: "hsl(154, 75%, 87%)",
  primary50: "hsl(152 68%, 96%)",

  // Neutral
  // These are the colors you will use the most and will make up the majority
  // of your UI. Use them for most of your text, backgrounds, and borders,
  // as well as for things like secondary buttons and links
  neutral950:  "hsl(210, 61%, 6%)" ,
  neutral900: "hsl(211, 39%, 13%)",
  neutral800: "hsl(209, 34%, 20%)",
  neutral700: "hsl(209, 28%, 29%)",
  neutral600: "hsl(210, 22%, 39%)",
  neutral500: "hsl(209, 23%, 50%)",
  neutral400: "hsl(211, 27%, 60%)",
  neutral300: "hsl(210, 31%, 70%)",
  neutral200: "hsl(212, 33%, 79%)",
  neutral100: "hsl(210, 36%, 86%)",
  neutral50: "hsl(210, 36%, 93%)",

  // Supporting
  // These colors should be used fairly conservatively throughout your UI to
  // avoid overpowering your primary colors. Use them when you need an
  // element to stand out, or to reinforce things like error states or positive
  // trends with the appropriate semantic color.
  supportingBlue950: "hsl(205, 100%, 12%)",
  supportingBlue900: "hsl(205, 100%, 21%)",
  supportingBlue800: "hsl(205, 87%, 29%)",
  supportingBlue700: "hsl(205, 82%, 33%)",
  supportingBlue600: "hsl(205, 76%, 39%)",
  supportingBlue500: "hsl(205, 67%, 45%)",
  supportingBlue400: "hsl(205, 65%, 55%)",
  supportingBlue300: "hsl(205, 74%, 65%)",
  supportingBlue200: "hsl(205, 84%, 74%)",
  supportingBlue100: "hsl(205, 97%, 85%)",
  supportingBlue50: "hsl(205, 79%, 92%)",

  // Supporting
  // These colors should be used fairly conservatively throughout your UI to
  // avoid overpowering your primary colors. Use them when you need an
  // element to stand out, or to reinforce things like error states or positive
  // trends with the appropriate semantic color.
  supportingPurple950: "hsl(263, 85%, 11%)",
  supportingPurple900: "hsl(263, 85%, 18%)",
  supportingPurple800: "hsl(262, 72%, 25%)",
  supportingPurple700: "hsl(262, 69%, 31%)",
  supportingPurple600: "hsl(262, 60%, 38%)",
  supportingPurple500: "hsl(262, 48%, 46%)",
  supportingPurple400: "hsl(262, 43%, 51%)",
  supportingPurple300: "hsl(261, 47%, 58%)",
  supportingPurple200: "hsl(261, 54%, 68%)",
  supportingPurple100: "hsl(261, 68%, 84%)",
  supportingPurple50: "hsl(262, 61%, 93%)",

  // Supporting
  // These colors should be used fairly conservatively throughout your UI to
  // avoid overpowering your primary colors. Use them when you need an
  // element to stand out, or to reinforce things like error states or positive
  // trends with the appropriate semantic color.
  
  supportingRed950: "hsl(360, 92%, 11%)",
  supportingRed900: "hsl(360, 92%, 20%)",
  supportingRed800:"hsl(360, 85%, 25%)",
  supportingRed700: "hsl(360, 79%, 32%)",
  supportingRed600: "hsl(360, 72%, 38%)",
  supportingRed500: "hsl(360, 67%, 44%)",
  supportingRed400: "hsl(360, 64%, 55%)",
  supportingRed300: "hsl(360, 71%, 66%)",
  supportingRed200: "hsl(360, 77%, 78%)",
  supportingRed100: "hsl(360, 82%, 89%)",
  supportingRed50: "hsl(360, 100%, 97%)",

  // Supporting
  // These colors should be used fairly conservatively throughout your UI to
  // avoid overpowering your primary colors. Use them when you need an
  // element to stand out, or to reinforce things like error states or positive
  // trends with the appropriate semantic color.
  supportingYellow950: "hsl(43, 86%, 10%)",
  supportingYellow900: "hsl(43, 86%, 17%)",
  supportingYellow800: "hsl(43, 77%, 27%)",
  supportingYellow700: "hsl(43, 72%, 37%)",
  supportingYellow600: "hsl(42, 63%, 48%)",
  supportingYellow500: "hsl(42, 78%, 60%)",
  supportingYellow400: "hsl(43, 89%, 70%)",
  supportingYellow300: "hsl(43, 90%, 76%)",
  supportingYellow200: "hsl(45, 86%, 81%)",
  supportingYellow100: "hsl(45, 90%, 88%)",
  supportingYellow50: "hsl(45, 100%, 96%)",
});

export const globalTokens = stylex.defineVars({
  maxWidth: `${MAX_WIDTH}px`,
  fontMono: [
    'ui-monospace',
    'Menlo',
    'Monaco',
    '"Cascadia Mono"',
    '"Segoe UI Mono"',
    '"Roboto Mono"',
    '"Oxygen Mono"',
    '"Ubuntu Monospace"',
    '"Source Code Pro"',
    '"Fira Mono"',
    '"Droid Sans Mono"',
    '"Courier New"',
    'monospace',
  ].join(', '),
  fontSans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ].join(', '),

  foregroundR: { default: '0', [DARK_MODE]: '255' },
  foregroundG: { default: '0', [DARK_MODE]: '255' },
  foregroundB: { default: '0', [DARK_MODE]: '255' },

  bgStartRGB: { default: 'rgb(214, 219, 220)', [DARK_MODE]: 'rgb(0, 0, 0)' },

  bgEndR: { default: '255', [DARK_MODE]: '0' },
  bgEndG: { default: '255', [DARK_MODE]: '0' },
  bgEndB: { default: '255', [DARK_MODE]: '0' },

  calloutRGB: { default: 'rgb(238, 240, 241)', [DARK_MODE]: 'rgb(20, 20, 20)' },
  calloutRGB50: {
    default: 'rgba(238, 240, 241, 0.5)',
    [DARK_MODE]: 'rgba(20, 20, 20, 0.5)',
  },

  calloutBorderR: { default: '172', [DARK_MODE]: '108' },
  calloutBorderG: { default: '175', [DARK_MODE]: '108' },
  calloutBorderB: { default: '176', [DARK_MODE]: '108' },

  cardR: { default: '180', [DARK_MODE]: '100' },
  cardG: { default: '185', [DARK_MODE]: '100' },
  cardB: { default: '188', [DARK_MODE]: '100' },

  cardBorderR: { default: '131', [DARK_MODE]: '200' },
  cardBorderG: { default: '134', [DARK_MODE]: '200' },
  cardBorderB: { default: '135', [DARK_MODE]: '200' },

  primaryGlow: {
    default: `conic-gradient(${[
      'from 180deg at 50% 50%',
      '#16abff33 0deg',
      '#0885ff33 55deg',
      '#54d6ff33 120deg',
      '#0071ff33 160deg',
      'transparent 360deg',
    ].join(', ')})`,
    [DARK_MODE]: 'radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))',
  },
  secondaryGlow: {
    default: 'radial-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
    [DARK_MODE]: `linear-gradient(${[
      'to bottom right',
      'rgba(1, 65, 255, 0)',
      'rgba(1, 65, 255, 0)',
      'rgba(1, 65, 255, 0.3)',
    ].join(', ')})`,
  },
});

export const scales = stylex.defineVars({
  small: 'scale(0.95)',
  medium: 'scale(1)',
  large: 'scale(1.2)',
});
