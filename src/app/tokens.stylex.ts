/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright Ian Cleary
 */

import * as stylex from "@stylexjs/stylex";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

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

export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});

export const size = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});

export const line = stylex.defineVars({
  xsmall: 0.5,
  small: 0.75,
  medium: 1.0,
  large: 1.5,
  xlarge: 2.0,
  xxlarge: 2.5,
  xxxlarge: 3.0,
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

export const columnGap = stylex.create({
  xsmall: {
    columnGap: size.xsmall,
  },
  small: {
    columnGap: size.small,
  },
  medium: {
    columnGap: size.medium,
  },
  large: {
    columnGap: size.large,
  },
  xlarge: {
    columnGap: size.xlarge,
  },
  xxlarge: {
    columnGap: size.xxlarge,
  },
  xxxlarge: {
    columnGap: size.xxxlarge,
  },
});

export const rowGap = stylex.create({
  small: {
    rowGap: size.small,
  },
  medium: {
    rowGap: size.medium,
  },
  large: {
    rowGap: size.large,
  },
  xlarge: {
    rowGap: size.xlarge,
  },
  xxlarge: {
    rowGap: size.xxlarge,
  },
  xxxlarge: {
    rowGap: size.xxxlarge,
  },
});

export const inlineFlex = stylex.create({
  columnGapSmall: {
    display: "inline-flex",
    columnGap: size.small,
  },
  columnGapMedium: {
    display: "inline-flex",
    columnGap: size.medium,
  },
  columnGapLarge: {
    display: "inline-flex",
    columnGap: size.large,
  },
  columnGapXLarge: {
    display: "inline-flex",
    columnGap: size.xlarge,
  },
  columnGapXXLarge: {
    display: "inline-flex",
    columnGap: size.xxlarge,
  },
  columnGapXXXLarge: {
    display: "inline-flex",
    columnGap: size.xxxlarge,
  },
});

export const grid = stylex.create({
  rowGapSmall: {
    display: "grid",
    rowGap: size.small,
  },
  rowGapMedium: {
    display: "grid",
    rowGap: size.medium,
  },
  rowGapLarge: {
    display: "grid",
    rowGap: size.large,
  },
  rowGapXLarge: {
    display: "grid",
    rowGap: size.xlarge,
  },
  rowGapXXLarge: {
    display: "grid",
    rowGap: size.xxlarge,
  },
  rowGapXXXLarge: {
    display: "grid",
    rowGap: size.xxxlarge,
  },
});

export const padding = stylex.create({
  small: {
    padding: size.small,
  },
  medium: {
    padding: size.medium,
  },
  large: {
    padding: size.large,
  },
  xlarge: {
    padding: size.xlarge,
  },
  xxlarge: {
    padding: size.xxlarge,
  },
  xxxlarge: {
    padding: size.xxxlarge,
  },
});

export const paddingLeft = stylex.create({
  small: {
    paddingLeft: size.small,
  },
  medium: {
    paddingLeft: size.medium,
  },
  large: {
    paddingLeft: size.large,
  },
  xlarge: {
    paddingLeft: size.xlarge,
  },
  xxlarge: {
    paddingLeft: size.xxlarge,
  },
  xxxlarge: {
    paddingLeft: size.xxxlarge,
  },
});

export const paddingRight = stylex.create({
  small: {
    paddingRight: size.small,
  },
  medium: {
    paddingRight: size.medium,
  },
  large: {
    paddingRight: size.large,
  },
  xlarge: {
    paddingRight: size.xlarge,
  },
  xxlarge: {
    paddingRight: size.xxlarge,
  },
  xxxlarge: {
    paddingRight: size.xxxlarge,
  },
});

export const paddingTop = stylex.create({
  small: {
    paddingTop: size.small,
  },
  medium: {
    paddingTop: size.medium,
  },
  large: {
    paddingTop: size.large,
  },
  xlarge: {
    paddingTop: size.xlarge,
  },
  xxlarge: {
    paddingTop: size.xxlarge,
  },
  xxxlarge: {
    paddingTop: size.xxxlarge,
  },
});

export const paddingBottom = stylex.create({
  small: {
    paddingBottom: size.small,
  },
  medium: {
    paddingBottom: size.medium,
  },
  large: {
    paddingBottom: size.large,
  },
  xlarge: {
    paddingBottom: size.xlarge,
  },
  xxlarge: {
    paddingBottom: size.xxlarge,
  },
  xxxlarge: {
    paddingBottom: size.xxxlarge,
  },
});

export const margin = stylex.create({
  small: {
    margin: size.small,
  },
  medium: {
    margin: size.medium,
  },
  large: {
    margin: size.large,
  },
  xlarge: {
    margin: size.large,
  },
  xxlarge: {
    margin: size.large,
  },
  xxxlarge: {
    margin: size.large,
  },
});

export const marginLeft = stylex.create({
  small: {
    marginLeft: size.small,
  },
  medium: {
    marginLeft: size.medium,
  },
  large: {
    marginLeft: size.large,
  },
  xlarge: {
    marginLeft: size.large,
  },
  xxlarge: {
    marginLeft: size.large,
  },
  xxxlarge: {
    marginLeft: size.large,
  },
});

export const marginRight = stylex.create({
  small: {
    marginRight: size.small,
  },
  medium: {
    marginRight: size.medium,
  },
  large: {
    marginRight: size.large,
  },
  xlarge: {
    marginRight: size.large,
  },
  xxlarge: {
    marginRight: size.large,
  },
  xxxlarge: {
    marginRight: size.large,
  },
});

export const marginTop = stylex.create({
  small: {
    marginTop: size.small,
  },
  medium: {
    marginTop: size.medium,
  },
  large: {
    marginTop: size.large,
  },
  xlarge: {
    marginTop: size.large,
  },
  xxlarge: {
    marginTop: size.large,
  },
  xxxlarge: {
    marginTop: size.large,
  },
});

export const marginBottom = stylex.create({
  small: {
    marginBottom: size.small,
  },
  medium: {
    marginBottom: size.medium,
  },
  large: {
    marginBottom: size.large,
  },
  xlarge: {
    marginBottom: size.large,
  },
  xxlarge: {
    marginBottom: size.large,
  },
  xxxlarge: {
    marginBottom: size.large,
  },
});
