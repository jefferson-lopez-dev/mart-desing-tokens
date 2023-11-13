import {
  base,
  brand,
  blue,
  gray,
  green,
  indigo,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from "./colors";
import { fontFamily, fontSize, fontWeight } from "./fonts";

export const choices = {
  colors: {
    base,
    brand,
    blue,
    gray,
    green,
    indigo,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow,
  },
  spacing: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },
  screens: {
    xs: "420px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    max: {
      xs: "419px",
      sm: "639px",
      md: "767px",
      lg: "1023px",
      xl: "1279px",
    },
  },
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: "-.05em",
    tight: "-.025em",
    normal: "0",
    wide: ".025em",
    wider: ".05em",
    widest: ".1em",
  },
  shadows: {
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    none: "none",
    down: {
      sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
    up: {
      sm: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
  },
  minHeight: {
    "0": "0",
    full: "100%",
    screen: "100vh",
  },
  minWidth: {
    0: "0",
    full: "100%",
  },
  opacity: {
    0: "0",
    25: "0.25",
    50: "0.5",
    75: "0.75",
    100: "1",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    full: "9999px",
  },
  zIndex: {
    auto: "auto",
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
  },
};

export const decisions = {
  // fonts
  title: {
    fontFamily: choices.fontFamily.sans,
    fontWeight: choices.fontWeight.bold,
    textTransform: "uppercase",
    fontSize: {
      "4": choices.fontSize.md,
      "3": choices.fontSize.lg,
      "2": choices.fontSize["3xl"],
      "1": choices.fontSize["4xl"],
      "0": choices.fontSize["5xl"],
    },
    color: {
      default: choices.colors.brand.tuna,
      alt: {
        blue: choices.colors.brand.bayofmany,
        red: choices.colors.brand.cinnabar,
        yellow: choices.colors.brand.chiffon,
        orange: choices.colors.brand.orange,
        gray: choices.colors.gray[800],
      },
    },
  },
  subtitle: {
    fontFamily: choices.fontFamily.serif,
    fontWeight: choices.fontWeight.normal,
    textTransform: "uppercase",
    fontSize: {
      "2": choices.fontSize.lg,
      "1": choices.fontSize["2xl"],
    },
    color: {
      default: choices.colors.brand.tuna,
      alt: {
        blue: choices.colors.brand.bayofmany,
        red: choices.colors.brand.cinnabar,
        yellow: choices.colors.brand.koromiko,
        gray: choices.colors.gray[800],
      },
    },
  },
  label: {
    fontFamily: choices.fontFamily.sans,
    fontWeight: choices.fontWeight.bold,
    fontSize: choices.fontSize.xs,
    color: choices.colors.gray[900],
  },
  eyebrow: {
    fontFamily: choices.fontFamily.sans,
    fontWeight: choices.fontWeight.bold,
    fontSize: {
      "2": choices.fontSize.xs,
      "1": choices.fontSize.lg,
    },
    color: choices.colors.brand.tuna,
  },
  paragraph: {
    fontFamily: choices.fontFamily.sans,
    fontWeight: {
      normal: choices.fontWeight.normal,
      bold: choices.fontWeight.bold,
    },
    fontSize: {
      sm: choices.fontSize.lg,
      md: choices.fontSize.xl,
    },
    color: {
      default: choices.colors.brand.tuna,
      alt: {
        blue: choices.colors.brand.bayofmany,
        red: choices.colors.brand.cinnabar,
        yellow: choices.colors.brand.chiffon,
        gray: choices.colors.gray[800],
      },
    },
  },
  icon: {
    color: {
      gray: choices.colors.gray[900],
    },
    fontSize: {
      sm: choices.fontSize.sm,
      md: choices.fontSize.md,
      lg: choices.fontSize.xl,
    },
  },
  // layout
  container: {
    maxWidth: { large: choices.screens.xl, small: choices.screens.md },
    padding: choices.spacing[6],
  },
  // utils
  queries: {
    screens: {
      xsmall: choices.screens.max.xs,
      small: choices.screens.max.sm,
      mobile: choices.screens.max.lg,
      desktop: choices.screens.lg,
    },
  },
};
