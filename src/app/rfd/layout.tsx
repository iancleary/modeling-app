import React from "react";
import stylex from "@stylexjs/stylex";

import Header from "@/components/header";

import { colors } from "../tokens.stylex";

const styles = stylex.create({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  content: {
    fontFamily: "system-ui, sans-serif",
    overflow: "hidden",

    width: {
      "@media (max-width: 1400px)": "90%",
      default: "60%",
    },
    paddingBlockStart: {
      default: 16,
      "@media (min-width: 800px)": 32,
    },
    paddingBlockEnd: {
      default: 16,
      "@media (min-width: 800px)": 32,
    },
  },
  text: {
    color: colors.neutral100,
  },
});

export default function RfdLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main {...stylex.props(styles.main)}>
        <div {...stylex.props(styles.content)}>{children}</div>
      </main>
    </>
  );
}
